import React from 'react';
import { Grid, Typography, Card, Button, TextField, TextareaAutosize } from '@material-ui/core';
import '../css/_notes.scss';
import { withStyles } from '@material-ui/core/styles';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';

const useStyles = (theme) => ({
	Maincard: {
		boxShadow: '3px 3px 3px 3px rgba(0.1,0.1,0.1,0.1)',
		padding: '10px 10px 10px 10px',
		width: '50%',
		marginLeft: '250px',
		marginTop: '-50px',
	},
});

class Notes extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className="note">
				<Grid item md={this.props.isDrawerOpen ? 12 : 10}>
					<Card variant="outlined" className={classes.Maincard}>
						<div>
							<input className="main-card-title" placeholder="Title"/>
						</div>
						<textarea aria-label="empty textarea" className="main-card-notes" placeholder="Take a notes...">
						</textarea>
						<div className="Icons-Buttons">
							<div className="icons">
								<div className="icon">
									<AddAlertOutlinedIcon />
								</div>
								<div className="icon">
									<PersonAddOutlinedIcon />
								</div>
								<div className="icon">
									<ColorLensOutlinedIcon />
								</div>
								<div className="icon">
									<ArchiveOutlinedIcon />
								</div>
								<div className="icon">
									<MoreVertOutlinedIcon />
								</div>
								<div className="icon">
									<UndoOutlinedIcon />
								</div>
								<div className="icon">
									<RedoOutlinedIcon />
								</div>
							</div>
							<Button className="close-button">Close</Button>
						</div>
					</Card>
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

export default withStyles(useStyles)(Notes);
