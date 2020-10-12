
import React, { Component } from 'react';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import NoteServices from '../services/NoteServices';
import { Grid,Card, Button} from '@material-ui/core';
import '../css/_notes.scss';
export default class DynamicNotes extends Component {
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
					<div className="main-card-div">
						{this.state.note.map((data, index) => {
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
								<div className="icon">
									<ArchiveOutlinedIcon />
								</div>
								<div className="icon">
									<MoreVertOutlinedIcon />
								</div>
							</div>
							<Button className="close-button" 
							type="submit"
							onClick={this.handleSubmit}>Close</Button>
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
