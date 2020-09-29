import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/google2.0.0.jpg';
import '../scss/_login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import { resetWithToken } from '../services/UserServices';

const useStyles = (theme) => ({
	textField: {
		width: '100%',
		paddingBottom: '15px',
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
		padding: '5px',
	},
	lastdiv: {
		paddingBottom: '30px',
		paddingTop: '30px',
	},

	resetText: {
		marginLeft: '31%',
		paddingBottom: '10px',
	},

	CombinationNote: {
		fontWeight: 'lighter',
		fontSize: '13px',
		color: 'blue',
	},

	errorTexts: {
		fontSize: '12px',
		color: 'red',
	},
});

const initial = {
	validate: true,
	confirmPw: '',
	newpassword: '',
	reenterpassword: '',
	count: 0,
	showPassword: false,
	passwordError: '',
	newpasswordError: '',
	reenterpasswordError: '',
};

const passwordRegexpattern =
	'/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/';
class ResetPassword extends Component {
	state = {
		validate: true,
		password: '',
		confirmPw: '',
		newpassword: '',
		reenterpassword: '',
		count: 0,
		showPassword: false,
		passwordError: '',
		newpasswordError: '',
		reenterpasswordError: '',
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
		let newpasswordError = '';

		if (!this.state.newpassword.match(passwordRegexpattern)) {
			newpasswordError = '**Password doesnt Match**';
		}

		if (newpasswordError) {
			this.setState({ newpasswordError });
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

		let newPasswordWithToken = {
			newPassword: this.state.newpassword,
		};

		console.log(newPasswordWithToken);
		await resetWithToken(newPasswordWithToken, this.props.match.params.token, (message) => {
			this.setState({
				snackbarMessage: message,
				snackbarStatus: true,
			});
		});
	};

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
				<Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
						<InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
						<OutlinedInput
							label="New Password"
							id="outlined-adornment-new-password"
							type={this.state.showPassword ? 'text' : 'password'}
							value={this.state.newpassword}
							onChange={this.handleChange('newpassword')}
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
				<div className={classes.errorTexts}>{this.state.newpasswordError}</div>
				<p className={classes.CombinationNote}>
					*Use atleast one special character, one number, one character and six digit long*
				</p>

				<div className={classes.lastdiv}>
					<Button
						className={classes.backButton}
						variant="contained"
						color="primary"
						onClick={this.redirectToLoginPg}
					>
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

export default withStyles(useStyles)(ResetPassword);
