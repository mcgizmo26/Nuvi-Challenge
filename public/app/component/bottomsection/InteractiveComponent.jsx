import React from 'react';
import axios from 'axios';

export default class InteractiveComponent extends React.Component {
	constructor(props) {
		super(props)
    this.state={
      value: ''
    }
    this.post_catcher = this.post_catcher.bind(this);
    this.replyToUser = this.replyToUser.bind(this);
		this.postToAll = this.postToAll .bind(this);
	}

	render(){
    console.log(this.props.id + ' ' + this.state.value);
		return (
			<section className="interactive-wrapper">

				<div className="interactive-header">
					<h1>INTERACT</h1>
				</div>

				<div className="interactive-body">

					<textarea onChange={this.post_catcher} value={this.state.value} placeholder="Nuvi Text Area"/>

				</div>

				<div className="button-section">

					<button onClick={this.postToAll}>Post to All</button>
					<button onClick={this.replyToUser}>Reply to User</button>

				</div>

			</section>
		)
	}

  post_catcher(event){
    this.setState({value: event.target.value})
  }

	postToAll(){
		console.log(new Date());
		axios.post(`api/postall/`, {
			date: new Date(),
			post: this.state.value
		}).then(r => {
			console.log(r);
		}).catch(error => {
			console.log(error);
		})
	}

  replyToUser(){

    let provider;
    this.props.basicInfo.map((obj) => {
      this.props.id === obj.id
      ? provider = obj.provider
      : null
    })

    axios.post(`api/add/${this.props.id}`, {
      id: this.props.id,
      provider: provider,
      reply: this.state.value
    }).then(r => {
      console.log(r);
    }).catch(error => {
      console.log(error);
    })
  }

}
