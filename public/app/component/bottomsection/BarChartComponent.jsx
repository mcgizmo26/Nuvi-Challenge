import React from 'react';
import {BarChart} from 'react-easy-chart';

require('../../../stylesheets/barchart.scss');

export default class BarChartComponent extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		const barStyle = {
			'.chart_text': {
				fill: '#0BB4B8'
			}
		}
		return (
			<section className='bar-chart-wrapper'>

				<div className="upper-bar-chart-container">
					<h1>NUMBER OF USERS USING PROVIDER</h1>
				</div>

				<div className="bar-chart-container">

					{this.props.facebook === 0 && this.props.twitter === 0 && this.props.tumblr === 0 && this.props.instagram === 0
						? <h1>Network Connection error. Refresh & Try Again</h1>
						: <div>
							<BarChart axes styles={barStyle} height={150} width={300} yTickNumber={5} margin={{
								top: 10,
								left: 50,
								bottom: 5,
								right: 50
							}} data={[
								{
									x: 'Instagram',
									y: this.props.instagram,
									color: '#CA3086'
								}, {
									x: 'Twitter',
									y: this.props.twitter,
									color: '#1DA1F2'
								}, {
									x: 'Facebook',
									y: this.props.facebook,
									color: '#3B5998'
								}, {
									x: 'Tumblr',
									y: this.props.tumblr,
									color: '#A43E2D'
								}
							]}/>

						</div>
}

				</div>

				<div className="lower-bar-chart-container">

					<div className="facebook-bar-stats">
						<h3>Facebook Users:</h3>
						<p>{this.props.facebook}</p>
					</div>

					<div className="twitter-bar-stats">
						<h3>Twitter Users:</h3>
						<p>{this.props.twitter}</p>
					</div>

					<div className="tumblr-bar-stats">
						<h3>Tumblr Users:</h3>
						<p>{this.props.tumblr}</p>
					</div>

					<div className="instagram-bar-stats">
						<h3>Instagram Users:</h3>
						<p>{this.props.instagram}</p>
					</div>

				</div>

			</section>
		)
	}
}
