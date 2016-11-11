import React from 'react';

export default class UserNameId extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section className="name-id-wrapper">

				<div className="header-label">
					<h1>USER</h1>
				</div>

				<div className='name-and-id-container'>
					<div className='clicked-name'>Name: {this.props.userInfo.name}</div>
					<div className='clicked-id'>Id: {this.props.userInfo.id}</div>
				</div>

			</section>
		)
	}
}
