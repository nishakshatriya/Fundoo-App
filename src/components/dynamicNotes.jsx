// import React from 'react';
// import { Grid, Typography, Card} from '@material-ui/core';
// import '../css/_notes.scss';
// import { withStyles } from '@material-ui/core/styles';

// const useStyles = (theme) => ({
// 	Maincard: {
// 		boxShadow: '3px 3px 3px 3px rgba(0.1,0.1,0.1,0.1)',
// 		padding: '10px 10px 10px 10px',
// 		width: '50%',
// 		marginLeft: '250px',
// 		marginTop: '-50px',
// 	},
// });

// class DynamicNotes extends React.Component {

// 	state = {
// 		note:null
// 	}

// 	async componentDidMount() {
//         const token = localStorage.getItem("token");
//         const URL = "http://fundoonotes.incubation.bridgelabz.com/api/notes/";
//         const url = `${URL}getNotesList?access_token=${token}`;
//         fetch(url).then(response => {
//             return response.json();
//         }).then(data => {
//             this.setState({ note: data.data.data });
//             console.log(this.state.note);
//         }).catch(error => console.log(error));
//     }
// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<Grid container className="note">
// 				<Grid item md={this.props.isDrawerOpen ? 12 : 10}>
// 					<Grid container spacing={2} className="note-row">
// 						<Grid item md={3}>
// 							<Card elevation={3} variant="outlined" className="note-card">
// 								{this.state.note}?
// 								{this.map.note.map((data, index) => {
// 								return	<div className="data">
// 									<h1>{data.title}</h1>
// 								<p>{data.description}</p>
// 								</div>

// 								})}:<div>Data is loading</div>
// 							</Card>
// 						</Grid>
// 					</Grid>
// 				</Grid>
// 			</Grid>
// 		);
// 	}
// }

// export default withStyles(useStyles)(DynamicNotes);

import React, { Component } from 'react';
import '../css/_notes.scss';
export default class GetNotes extends Component {
	state = {
		note: null,
	};

	async componentDidMount() {
		const token = localStorage.getItem('token');
		const URL = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/';
		const url = `${URL}getNotesList?access_token=${token}`;
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ note: data.data.data });
				console.log(this.state.note);
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div>
				{this.state.note ? (
					<div className="note-card">
						{this.state.note.map((data, index) => {
							return (
								<div className="note">
									<h4> {data.title}</h4>
									<p>{data.description}</p>
								</div>
							);
						})}
					</div>
				) : (
					<div className="noteList"></div>
				)}
			</div>
		);
	}
}
