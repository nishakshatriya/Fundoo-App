import React from 'react';
import { Grid, Typography, Card, Button, TextField, TextareaAutosize } from '@material-ui/core';
import '../css/_notes.scss';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
	Maincard: {
		boxShadow: '3px 3px 3px 3px rgba(0.1,0.1,0.1,0.1)',
		padding: '10px 10px 10px 10px',
		width: '50%',
		marginLeft: '250px',
		marginTop: '-50px',
	},
});

class DynamicNotes extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className="note">
				<Grid item md={this.props.isDrawerOpen ? 12 : 10}>
					<Grid container spacing={2} className="note-row">
						<Grid item md={3}>
							<Card elevation={3} variant="outlined" className="note-card">
								<Typography className="note-content">
									Hello Hi asdfghjklsdfghjkkjhgfsdfghjklkjhgew45678ohgv
								</Typography>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card elevation={3} variant="outlined" className="note-card">
								<Typography className="note-content">
									Good Morning asdfghjkkjtredfghjk,mnbvcbnm,
								</Typography>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card elevation={3} variant="outlined" className="note-card">
								<Typography className="note-content">
									Good Evening wertyuiop;lkjhgfdsazxcvbnm,.
								</Typography>
							</Card>
						</Grid>
						<Grid item md={3}>
							<Card elevation={3} variant="outlined" className="note-card">
								<Typography className="note-content">
									Good Night asdfbnmmnbvcxswertyuiol,mnbvcxzsrtyuj
								</Typography>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(useStyles)(DynamicNotes);
