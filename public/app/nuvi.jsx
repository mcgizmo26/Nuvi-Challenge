import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ClickedUser from './component/ClickedUser.jsx';
import DateNuvi from './component/DateNuvi.jsx';

import DropDown from './component/Dropdown.jsx';
import SearchBar from './component/SearchBar.jsx';

import BarChartComponent from './component/bottomsection/BarChartComponent.jsx';
import InteractiveComponent from './component/bottomsection/InteractiveComponent.jsx';
import PieChartComponent from './component/bottomsection/PieChartComponent.jsx';

require('../stylesheets/bottombody.scss');
require('../stylesheets/header.scss');
require('../stylesheets/interactivecomponent.scss');
require('../stylesheets/main.scss');
require('../stylesheets/middlemidbody.scss');
require('../stylesheets/modal.scss');
require('../stylesheets/uppermidbody.scss');

class Nuvi extends React.Component {
	constructor() {
		super()

		this.state = {
			basicInfo: [],
			clickedUserObj: {},
			earliestDate: '',
			latestDate: '',
			facebook: 0,
			id: '',
			instagram: 0,
			tumblr: 0,
			twitter: 0,
      facebookPer: 0,
      twitterPer: 0,
      tumblrPer: 0,
      instagramPer: 0

		}

		this.requestedIdCb = this.requestedIdCb.bind(this);
	}

	componentWillMount() {
		axios.get('/api/get/nuvi').then(r => {
			console.log(r.data);

			let facebook = 0;
			let tumblr = 0;
			let twitter = 0;
			let instagram = 0;
			let dateArray = [];
			let earliest = 0;
			let latest = 0;

			r.data.map((obj) => {
				if (obj.provider === "facebook") {
					facebook++;
				} else if (obj.provider === "tumblr") {
					tumblr++;
				} else if (obj.provider === "twitter") {
					twitter++;
				} else if (obj.provider === "instagram") {
					instagram++;
				}
			})

			r.data.map((obj) => {
				let parsedDate = Date.parse(obj.date);
				dateArray.push(parsedDate);
			})

			for (var i = 0; i < dateArray.length; i++) {
				if (earliest === 0) {
					earliest = dateArray[i];
					latest = dateArray[i];
				} else if (dateArray[i] < earliest) {
					earliest = dateArray[i];
				} else if (dateArray[i] > latest) {
					latest = dateArray[i];
				}
			}
			let d = new Date(latest)
			let updatedLatest = d.toDateString().split(' ').splice(1, 3).join(' ');
			let s = new Date(earliest)
			let updatedEarliest = s.toDateString().split(' ').splice(1, 3).join(' ');

      let fUser = facebook;
      let twUser = twitter;
      let tuUser = tumblr;
      let iUser = instagram;
      let toUsers = fUser + twUser + tuUser + iUser;
      let fper = Math.ceil((fUser / toUsers) * 100);
      let twper = Math.ceil((twUser / toUsers) * 100);
      let tuper = Math.ceil((tuUser / toUsers) * 100);
      let iper = Math.ceil((iUser / toUsers) * 100);
       Number.isNaN(fper) || Number.isNaN(twper) || Number.isNaN(tuper) || Number.isNaN(iper)
      ? null
      : this.setState({
       facebookPer: fper,
       twitterPer: twper,
       tumblrPer: tuper,
       instagramPer: iper})

			this.setState({
				earliestDate: updatedEarliest,
				latestDate: updatedLatest,
				basicInfo: r.data,
				facebook: facebook,
				tumblr: tumblr,
				twitter: twitter,
				instagram: instagram,

			});
		})
	}

	componentDidMount() {
		this.requestedIdCb();
	}

	requestedIdCb(requestedId) {
		this.setState({id: requestedId})
	}

	render() {

		return (
			<section>

				<div className="background"></div>

				<div className="header">

					<img className="nuvi" src='../img/nuvi-logo.png'/>

					<div className="search-area">
						<SearchBar passed={this.state.basicInfo} cb={this.requestedIdCb}/>
					</div>

				</div>

				<div className="mid-section">

					<div className="upper-middle">
						<DateNuvi early={this.state.earliestDate} late={this.state.latestDate}/>
            <DropDown passed={this.state.basicInfo} cb={this.requestedIdCb}/>
					</div>

					<ClickedUser passedUser={this.state.clickedUserObj}/>

				</div>

				<div className="bottom-section">
					<PieChartComponent facebookPer={this.state.facebook} tumblrPer={this.state.tumblr} twitterPer={this.state.twitter} instagramPer={this.state.instagram} facebook={this.state.facebook} tumblr={this.state.tumblr} twitter={this.state.twitter} instagram={this.state.instagram}/>
					<BarChartComponent facebook={this.state.facebook} tumblr={this.state.tumblr} twitter={this.state.twitter} instagram={this.state.instagram}/>
          <InteractiveComponent id={this.state.id} basicInfo={this.state.basicInfo}/>
				</div>

			</section>
		)
	}

	componentDidUpdate(prevProps, prevState) {

		if (this.state.id !== prevState.id) {
			axios.get(`/api/get/${this.state.id}`);
			this.userInfoFiltered();
		}
	}

	userInfoFiltered() {

		let clickedId = this.state.id;
		this.state.basicInfo.map((obj) => {
			if (clickedId === obj.id) {
				this.setState({clickedUserObj: obj})
			}
		})
	}

}

ReactDOM.render(
	<Nuvi/>, document.getElementById('app'));
