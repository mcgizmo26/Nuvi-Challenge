import React from 'react';

import {PieChart} from 'react-easy-chart';

require('../../../stylesheets/piechart.scss');

export default class PieChartComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			facebookPer: 0,
			twitterPer: 0,
			tumblrPer: 0,
			instagramPer: 0,
			facebook: 0,
			twitter: 0,
			tumblr: 0,
			instagram: 0
		}
	}


	render() {
		return (
			<section className='pie-chart-wrapper'>

				<div className="upper-pie-chart-container">
					<h1>PERCENTAGE OF USERS USING PROVIDER</h1>
				</div>

				<div className="mid-pie-chart-container">
					<div className="facebook-color">
						<div></div>
						<p>Facebook</p>
						<p>{this.props.facebookPer}%</p>
					</div>

					<div className="twitter-color">
						<div></div>
						<p>Twitter</p>
						<p>{this.props.twitterPer}%</p>
					</div>

					<div className="tumblr-color">
						<div></div>
						<p>Tumblr</p>
						<p>{this.props.tumblrPer}%</p>
					</div>

					<div className="instagram-color">
						<div></div>
						<p>Instagram</p>
						<p>{this.props.instagramPer}%</p>
					</div>

				</div>

				<div className="pie-chart-container">

					<div>
					{this.props.facebook === 0 && this.props.twitter === 0 && this.props.tumblr === 0 && this.props.instagram === 0
            ? <h1>Network Connection error. Refresh & Try Again</h1>
						: <PieChart labels size={150} data={[
							{
								value: this.props.facebook,
								color: '#3B5998'
							}, {
								value: this.props.twitter,
								color: '#1DA1F2'
							}, {
								value: this.props.tumblr,
								color: '#A43E2D'
							}, {
								value: this.props.instagram,
								color: '#CA3086'
							}
						]} styles={{
							'.chart_text': {
								fontSize: '1em',
								fill: '#0BB4B8'
							}
						}}/>
					}
					</div>

				</div>

			</section>
		)
	}
}
