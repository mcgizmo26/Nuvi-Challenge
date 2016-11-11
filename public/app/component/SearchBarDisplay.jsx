import React from 'react';
import axios from 'axios';

export default class SearchBarDisplay extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			toggle: false,
			id: ''
		}
		this.sendToSearchBar = this.sendToSearchBar.bind(this);
    this.closeModal = this.closeModal.bind(this);
	}


  componentWillReceiveProps(nextProps){
  
    nextProps.toggle !== this.state.toggle && nextProps.searchName !== this.props.searchName
    ? this.setState({toggle: true})
    : null

  }

	render() {
		return (
			<section>

				{this.state.toggle === false
					? null
					: <div>
						  <div className='transparent-background'></div>
						  <div className="div-box-modal-wrapper">
							  <div className="searchBoxModal">
                  <div onClick={this.closeModal} className="closeModal">X</div>
								  <ul>
									  {this.props.searchName.map((obj, i) => <li key={i} onClick={this.setUserInfo.bind(this)} id={obj.id}>{obj.name}</li>)}
								</ul>
							</div>
						</div>
					</div>
}

			</section>
		)
	}

  closeModal(event){
    this.setState({toggle: false});
  }

	setUserInfo(event, value) {
		this.setState({id: event.target.id, toggle: false});
	}

	componentDidUpdate(nextProps, nextState) {
		nextState.id !== this.state.id
			? this.sendToSearchBar()
			: null
	}

	sendToSearchBar() {
		let retrievedId = this.state.id
		this.props.searchBarCb(retrievedId);
	}

}
