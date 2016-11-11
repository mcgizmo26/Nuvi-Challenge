import React from 'react';

export default class DateNuvi extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      earliest: '',
      latest: '',
      newArray: []
    }
}


  render(){
    return(

        <section className="content-container">
           <h2> Data </h2>
           <p> for </p>
           <h1> NUVIAgency </h1>
           <p> between </p>

           {this.props.early === ''
             ? <h2>Date</h2>
             : <h2>{this.props.early}</h2>
           }

           <p> - </p>
           {this.props.early === ''
             ? <h2>Date</h2>
             : <h2>{this.props.late}</h2>
           }
        </section>

    )
  }

}
