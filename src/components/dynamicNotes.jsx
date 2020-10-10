
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
					<div className="main-card-div">
						{this.state.note.map((data, index) => {
							return (
								<div className="note-card-list">
									<h4> {data.title}</h4>
									<p>{data.description}</p>
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
