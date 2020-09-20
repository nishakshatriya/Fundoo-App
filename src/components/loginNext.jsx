import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/google2.0.0.jpg';
import '../css/login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
	textField: {
		width: '100%',
	},
	forgotMsg: {
		color: 'cornflowerblue',
		marginTop: '15%',

		fontWeight: 'bold',
	},
	browseLinkText: {
		fontSize: '15px',
		marginTop: '20px',
		marginBottom: '40px',
	},
	spantext: {
		color: 'cornflowerblue',
		fontWeight: 'bold',
		texrDecoration: 'none',
	},
	nextButton: {
		float: 'right',
	},
	lastdiv: {
		paddingBottom: '30px',
	},
});

class LoginPageNext extends Component {
	constructor(props) {
		super(props);

		this.state = {
			emailId: '',
		};
	}

	updateState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	myFunction = () => {
		document.getElementById('myDropdown').classList.toggle('show');
  };
  
	render() {
		const { classes } = this.props;
		return (
			<div className="root">
				<img className="logo" src={Logo} alt="GoogleImage" />
				<p className="firstText">Sign in</p>
				<br />
				<p className="secondText">to continue to Gmail</p>
				<br />

				<TextField
					label="Password"
					type="password"
					value={this.state.password}
					className={classes.textField}
					name="password"
					variant="outlined"
					margin="normal"
					onChange={this.updateState}
				/>

				<div className={classes.lastdiv}>
					<div className="dropdown">
						<button onClick={this.myFunction} className="dropbtn">
							<span className="dropdownbtn">Forgot Password?</span>
						</button>
					</div>

					<Button
						className={classes.nextButton}
						variant="contained"
						color="primary"
						href="#contained-buttons"
						onClick={this.handleSubmit}
					>
						Next
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(LoginPageNext);
