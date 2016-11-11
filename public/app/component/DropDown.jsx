import React from 'react';

export default class DropDown extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			id: ''
		}
		this.send_person = this.send_person.bind(this);
	}

	render() {
		return (
			<section>
				<div className="option-box">
					<div>
					  <li>Nuvi User Scroll</li>
						{
							this.props.passed !== null
							? this.props.passed.map((obj, i) => {
								return (
									  <li onClick={this.send_person} key={i} id={obj.id}>{obj.name}</li>
								)
							})
							: null
            }
					</div>
				</div>

			</section>

		)
	}

  send_person(event){
		this.setState({id: event.target.id})
	}

	componentDidUpdate(prevProps, prevState) {
		let requestedId = this.state.id
		prevState.id !== this.state.id
			? this.props.cb(requestedId)
			: null
	}

}
