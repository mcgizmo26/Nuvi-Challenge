import React from 'react';

import UserNameId from './usermidsection/UserNameId.jsx';
import UserProviderDate from './usermidsection/UserProviderDate.jsx';
import UserContent from './usermidsection/UserContent.jsx';

export default class ClickedUser extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			userInfo: []
		}
	}

	componentWillReceiveProps(nextProps) {
		this.props !== nextProps
			? this.setState({userInfo: nextProps.passedUser})
			: null
	}

	render() {

		return (
			<section className="lower-middle">

					<UserNameId userInfo={this.state.userInfo}/>
					<UserProviderDate userInfo={this.state.userInfo}/>
					<UserContent userInfo={this.state.userInfo}/>

			</section>
		)
	}
}
