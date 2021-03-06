import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/google2.0.0.jpg';
import '../css/login.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { loginWithCredentials } from '../services/UserServices';
import Userservice from '../services/UserService';

const useStyles = (theme) => ({
	textField: {
		width: '100%',
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
	},
	lastdiv: {
		paddingBottom: '30px',
	},
});

const initial = {
	emailId: '',
	emailError: '',
	password: '',
};

class LoginPage extends Component {
	state = {
		emailId: '',
		emailError: '',
		password: '',
	};

	updateState = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleChange = (prop) => (event) => {
		this.setState({ [prop]: event.target.value });
	};

	myFunction = () => {
		document.getElementById('myDropdown').classList.toggle('show');
	};

	handleClickShowPassword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};

	handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	validate = () => {
		let emailError = '';

		if (!this.state.emailId.includes('@')) {
			emailError = '**Please Enter Valid Email**';
		}

		if (emailError) {
			this.setState({ emailError });
			return false;
		}
		return true;
	};

	handleSnackbarClose = (event, reason) => {
		console.log(event, reason);
		this.setState({
			snackbarStatus: false,
		});
	};

	redirectToForgotPasswordPg = () => {
		this.props.history.push('/forgotPassword');
	};

	// redirectToDashboardPg = () => {
	// 	this.props.history.push('/dashboard');
	// };

	handleSubmit = async (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.setState(initial);
		}

		let userCredentials = {
			email: this.state.emailId,
			password: this.state.password,
		};

		console.log(userCredentials);

			loginWithCredentials(userCredentials, (response) => {
			let message;
			if(response.data === undefined){
				message = response.response.data.error.message;
				this.setState({
					snackbarMessage: message,
					snackbarStatus: true,
				});
			}else{
				localStorage.setItem('token',response.data.id);
				localStorage.setItem('email',response.data.email);
				localStorage.setItem('firstName',response.data.firstName);
				localStorage.setItem('lastName',response.data.lastName);

				this.props.history.push('/dashboard');
			}
			let token = localStorage.getItem('token');
			let email = localStorage.getItem('email');
			let firstName = localStorage.getItem('firstName');
			let lastName = localStorage.getItem('lastName');
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className="root">
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					open={this.state.snackbarStatus}
					onClose={this.handleSnackbarClose}
					autoHideDuration={2000}
					message={this.state.snackbarMessage}
				/>
				<img className="logo" src={Logo} alt="GoogleImage" />
				<p className="firstText">Sign in</p>
				<br />
				<p className="secondText">to continue to Gmail</p>
				<br />

				<TextField
					label="Email or Phone"
					type="text"
					value={this.state.emailId}
					className={classes.textField}
					name="emailId"
					variant="outlined"
					margin="normal"
					onChange={this.updateState}
				/>
				<div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
				<Grid item xs={12}>
					<FormControl
						className={clsx(classes.margin, classes.textField, classes.PasswordText)}
						variant="outlined"
						size="small"
					>
						<InputLabel htmlFor="outlined-adornment-reenterpassword">Password</InputLabel>
						<OutlinedInput
							label="Password"
							id="outlined-adornment-password password"
							name="password"
							type={this.state.showPassword ? 'text' : 'password'}
							value={this.state.password}
							onChange={this.updateState}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={this.handleClickShowPassword}
										onMouseDown={this.handleMouseDownPassword}
										edge="end"
									>
										{this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
								</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
				</Grid>
				<Button onClick={this.redirectToForgotPasswordPg} className={classes.forgotMsg}>
					Forgot email or password?
				</Button>
				<br />
				<p className={classes.browseLinkText}>
					Not your computer? Use Guest mode to sign in privately.
					<a
						style={{ textDecoration: 'none' }}
						href="https://support.google.com/chrome/answer/6130773?hl=en"
						className={classes.spantext}
					>
						{' '}
						Learn more
					</a>{' '}
				</p>

				<div className={classes.lastdiv}>
					<div className="dropdown">
						<Link to={'/createAccount'} className="sign-link">
							Sign Up Instead
						</Link>
					</div>
					<Button
						className={classes.nextButton}
						variant="contained"
						color="primary"
						href="/loginNext"
						onClick={this.handleSubmit}
					>
						Login
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(useStyles)(LoginPage);
