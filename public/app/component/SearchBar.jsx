import React from 'react';

import SearchBarDisplay from './SearchBarDisplay.jsx';

export default class SearchBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			nameHolder: [],
      toggle: false,
			id: ''
		}
		this.name_catcher = this.name_catcher.bind(this);
		this.search_person = this.search_person.bind(this);
		this.retrievedId = this.retrievedId.bind(this);
	}


	retrievedId(retrievedId) {
		this.setState({id: retrievedId})
	}

	render() {
		return (
			<section>
				<div className="search-section">
					<input onChange={this.name_catcher} placeholder=' Nuvi Search by Name'></input>
					<button className="inputButton" onClick={this.search_person}>Search</button>
				</div>
				<SearchBarDisplay searchName={this.state.nameHolder} toggle={this.state.toggle} searchBarCb={this.retrievedId}/>
			</section>
		)
	}

	name_catcher(event) {
		this.setState({name: event.target.value})
	}

	search_person(event) {

		let searchPerson = this.props.passed;
		let stateName = this.state.name;
		let tempPassedNameArray = []
		let tempSearchNameArray = []
		searchPerson.map((obj) => {
			tempPassedNameArray.push([
				obj.name.split(' '), {
					id: obj.id
				}
			])
		})
		let tPNA;
		let compId;
		let pushedSearch = []
		tempSearchNameArray.push(stateName.split(' '))
		for (var i = 0; i < tempSearchNameArray.length; i++) {
			let nameX = tempSearchNameArray[i]
			for (var x = 0; x < nameX.length; x++) {
				for (var j = 0; j < tempPassedNameArray.length; j++) {
					let tempJ = tempPassedNameArray[j]
					for (var h = 0; h < tempJ[h].length; h++) {
						let tempH = tempJ[h]
						for (var k = 0; k < tempH.length; k++) {
							if (nameX[x].toLowerCase() === tempH[k].toLowerCase()) {
								tPNA = tempPassedNameArray[j]
								tPNA.forEach((obj) => {
									!obj.id
										? null
										: pushedSearch.push({name: tempH.join(' '), id: obj.id});
								})
							}
						}
					}
				}
			}
		}
		this.setState({nameHolder: pushedSearch, toggle: true})
	}

	componentDidUpdate(prevProps, prevState) {
		let requestedId = this.state.id
		prevState.id !== this.state.id
			? this.props.cb(requestedId)
			: null
	}
}
