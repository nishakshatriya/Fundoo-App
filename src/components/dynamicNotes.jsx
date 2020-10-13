
import React, { Component } from 'react';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Grid,Card, Button} from '@material-ui/core';
import { withStyles} from "@material-ui/core/styles";
import '../css/_notes.scss';
import NoteServices from '../services/NoteServices';


const useStyles = (theme) => ({

	MuiSvgIcon: {
		width:'0.5em',
		height:'0.5em'
	}
});

 class DynamicNotes extends Component {
	state = {
		note: null,
		id:'',
		isDeleted: false,
		isArchived: false
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
				console.log("data=====>",data)
			})
			.catch((error) => console.log(error));
	}

	deleteNote(data) {
        var noteData = { noteIdList: [data.id], isDeleted: true};
		NoteServices.trashNote(noteData);
		this.componentDidMount();
	}
	
	archiveNote(data) {
		var noteData = { noteIdList: [data.id], isArchived: true };
		NoteServices.archiveNote(noteData);
		this.componentDidMount();
	}

	render() {
		return (
			<div>
				{this.state.note ? (
					<div className="main-card-div">
						{this.state.note.filter((data) => !data.isDeleted && !data.isArchived).map((data, index)=> {
							const id = data.id;
							return (
								<div className="note-card-list">
									<h4> {data.title}</h4>
									<p>{data.description}</p>
									<div className="Icons-Buttons">
							<div className="dynamic-icons">
								<div className="icon">
									<AddAlertOutlinedIcon />
								</div>
								<div className="icon">
									<PersonAddOutlinedIcon />
								</div>
								<div className="icon">
									<ColorLensOutlinedIcon />
								</div>
								<div className="icon" onClick={()=>this.archiveNote({id})}>
									<ArchiveOutlinedIcon />
								</div>
								<div className="icon" onClick={()=>this.deleteNote({id})}>
									<DeleteOutlineOutlinedIcon />
								</div>
							</div>
						</div>
								</div>
								
							);
						})}
					</div>
				) : (
					<div className="blank"></div>
				)}
			</div>
		);
	}
}

export default withStyles(useStyles)(DynamicNotes);