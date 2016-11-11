import React from 'react';

export default class UserProviderDate extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section className="provider-and-date-wrapper">

      <div className="header-label">
        <h1>PROVIDER AND POSTED DATE</h1>
      </div>

      <div className='provider-and-date-container'>
        <div className='clicked-provider'>Provider: {this.props.userInfo.provider}</div>
        <div className='clicked-date'>Date: {this.props.userInfo.date}</div>
      </div>

      </section>
    )
  }
}
