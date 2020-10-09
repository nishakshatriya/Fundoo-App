import React from 'react';
import { Grid,Card, Button} from '@material-ui/core';
import '../css/_notes.scss';
import DynamicNotes from '../components/dynamicNotes.jsx';
import { withStyles } from '@material-ui/core/styles';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import NoteServices from '../services/NoteServices';
// import { response } from 'express';
// import { ArtTrack } from '@material-ui/icons';

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
	state = {
		title: '',
		description: '',
	};


	// const [note, setNote] = useState({ title: "", description: "" });

	updateState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	};

	handleChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	handleSubmit =  (event) => {
		event.preventDefault();

		 let noteData = {
			title:this.state.title,
			description:this.state.description
		}
		 console.log("Noteeee Objectttt",noteData)
		 NoteServices.createNew(noteData).then((response) => {
            if(response.status === 200){
				alert("successfully added")
            }
            else{
                alert("Empty Note Cannot be added");
            }
        }

        ).catch((error) => {
            alert("Empty Note Cannot be added");
        });
	};

	render() {
		const { classes } = this.props;
		return (
			<Grid container className="note">
				<Grid item md={this.props.isDrawerOpen ? 12 : 10}>
					<Card variant="outlined" className={classes.Maincard}>
						<div>
							<input
								className="main-card-title"
								placeholder="Title"
								name="title"
								value={this.state.title}
								onChange={this.updateState}
								required
							/>
						</div>
						<textarea
							aria-label="empty textarea"
							className="main-card-notes"
							placeholder="Take a notes..."
							name="description"
							value={this.state.description}
							onChange={this.updateState}
							required
						></textarea>
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
							<Button className="close-button" 
							type="submit"
							onClick={this.handleSubmit}>Close</Button>
						</div>
					</Card>
					<DynamicNotes />
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(useStyles)(Notes);
