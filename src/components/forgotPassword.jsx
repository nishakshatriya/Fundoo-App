import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/google2.0.0.jpg';
import '../scss/_login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import { resetWithEmailId } from '../services/UserServices';

const useStyles = (theme) => ({
	textField: {
        width: '100%',
        paddingBottom:'15px'
	},
	forgotMsg: {
		color: 'cornflowerblue',
		marginTop: '2%',

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
        padding:'5px'
	},
	lastdiv: {
		paddingBottom: '30px',
	},
	
	resetText: {
		marginLeft:'31%',
		paddingBottom:'10px'
		
	},

	CombinationNote : {
		fontWeight:'lighter',
		fontSize:'13px',
		color:'blue'
	},

	errorTexts: {
		fontSize:'12px',
		color:'red'
	}
});

const initial = {
	email:'',
	validate: true,
	count: 0,
	showPassword: false,
};

class ForgotPassword extends Component {
	state = {
		email:'',
		validate: true,
		count: 0,
		showPassword: false,	
	};

	handleChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	updateState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleClickShowPassword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};

	handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	handleSnackbarClose = (event, reason) => {
		console.log(event, reason);
		this.setState({
			snackbarStatus: false,
		});
	};

	validate = () => {
		let emailError='';

		if (!this.state.email.includes("@")) {
			emailError = '**Please Enter Valid email**';
		}

		if (emailError) {
			this.setState({ emailError});
			return false;
		}
		return true;
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.setState(initial);
		}

		let emailData = {
			email: this.state.email
		}

		console.log(emailData);
		await resetWithEmailId(emailData, (message) => {
			this.setState({
				snackbarMessage: message,
				snackbarStatus: true
			})
		});
	};

	redirectToLoginPg = () =>{
		this.props.history.push('/')
	}

	render() {
		const { classes } = this.props;
		return (
			<div className="root">
				<img className="logo" src={Logo} alt="GoogleImage" />
				<p className={classes.resetText}>Reset Password</p>
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					open={this.state.snackbarStatus}
					onClose={this.handleSnackbarClose}
					autoHideDuration={3000}
					message={this.state.snackbarMessage}
				/>
				<TextField
					label="Email or Phone"
					type="text"
					value={this.state.email}
					className={classes.textField}
					name="email"
					variant="outlined"
					margin="normal"
					onChange={this.updateState}
				/>
				<div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
				<div className={classes.lastdiv}>
					<Button
					className={classes.backButton}
						variant="contained"
						color="primary"
						onClick={this.redirectToLoginPg}>
							Back
					</Button>
					<Button
						className={classes.nextButton}
						variant="contained"
						color="primary"
						onClick={this.handleSubmit}
					>
						Reset
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(ForgotPassword);
