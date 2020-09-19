import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../css/register.css';
import googleLogo from '../assets/google2.0.0.jpg';
import Account from '../assets/account.png';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/styles/withStyles';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = (theme) => ({
	root: {
		border: '1px solid lightgrey',
		shadow: '5px 10px gray',
		borderRadius: '10px',
		margin: '3% 15% 10% 20%',
		float: 'left',
		padding: '4%',
		display: 'flex',
		flex_direction: 'column',
		width: '50%',
		height: '100%',
		flexWrap: 'no-wrap',
	},

	textField: {
		width: '100%',
	},
	logo: {
		height: '50px',
		width: '90px',
		marginTop: '3%',
		marginLeft: '-2%',
	},
	firstblock: {
		width: '90%',
	},
	combinationText: {
		marginRight: '58%',
		fontWeight: '300',
		marginTop: '5px',
		fontSize: '60%',
	},
	currentAccount: {
		fontSize: '90%',
		marginRight: '40%',
	},

	passwordCombination: {
		fontSize: '60%',
		fontWeight: '300',
		marginRight: '57%',
	},

	usernameMsg: {
		color: 'blue',
		marginBottom: '7%',
		fontWeight: '500',
		float: 'left',
	},
	nextButton: {
		float: 'right',
	},
	lastdiv: {
		marginTop: '10%',
	},

	accountLogo: {
		width: '210px',
		marginTop: '70%',
	},

	inputBox: {
		border: 'transparent lightgrey 1px',
		width: '87%',
		marginTop: '3%',
	},

	imageHelpertext: {
		fontSize: '15px',
		marginLeft: '15px',
	},

	imageHelpertext1: {
		fontSize: '15px',
		marginLeft: '20%',
	},
});

class user extends Component {
	state = {
		username: 'User name',
		staticText: '@gmail.com',
		validate: true,
		firstName: '',
		lastName: '',
		emailId: '',
		password: null,
		confirmPw: null,
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

	validateInfo = async () => {
		const regexp = /[A-Za-z]{3,20}$/;
		const regexp1 = /[A-Za-z0-9]{6,30}$/;
		const regexPswd = /[A-Za-z0-9@#$%^&*]{8,20}$/;

		if (!regexp.test(this.state.firstName)) {
			await this.setState({ firstName: '', validate: false });
			console.log(this.state.validate);
		}

		if (!regexp.test(this.state.lastName)) {
			await this.setState({ lastName: ' ', validate: false });
			console.log(this.state.validate);
		}

		if (!regexp1.test(this.state.emailId)) {
			await this.setState({ emailId: ' ', validate: false });
		}

		if (!regexPswd.test(this.state.password)) {
			await this.setState({ password: '', validate: false });
		}

		if (this.state.password !== this.state.confirmPw) {
			await this.setState({ confirmPw: '', validate: false });
		}

		return this.state.validate;
	};

	handleSubmit = async (event) => {
		const userData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			emailId: this.state.emailId,
			password: this.state.password,
		};

		(await this.validateInfo()) ? this.props.userDetails(userData) : this.props.userDetails();
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div classes={classes.firstblock}>
					<div classes={classes.inputBox}>
						<img className={classes.logo} src={googleLogo} alt="google-icon"></img>
						<p className="registerpgfirstText">Create your Google Account</p>
						<form>
							<Grid container spacing={1} direction="row" justify="space-evenly" alignItems="center">
								<Grid item xs={12} sm={6}>
									<TextField
										label="First name"
										type="text"
										value={this.state.firstName}
										className={classes.textField}
										name="firstName"
										variant="outlined"
										size="small"
										margin="normal"
										onChange={this.updateState}
									/>
									{this.state.firstName === '' ? (
										<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
											enter valid firstname
										</FormHelperText>
									) : null}
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										label="Last name"
										type="text"
										name="lastName"
										value={this.state.lastName}
										className={classes.textField}
										variant="outlined"
										size="small"
										margin="normal"
										onChange={this.updateState}
									/>
									{this.state.lastName === '' ? (
										<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
											enter valid lastname
										</FormHelperText>
									) : null}
								</Grid>
								<Grid item xs={12}>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant="outlined"
										size="small"
										margin="normal"
									>
										<InputLabel htmlFor="outlined-adornment-emailid">
											{this.state.username}
										</InputLabel>
										<OutlinedInput
											id="outlined-adornment-weight"
											value={this.state.emailId}
											onChange={this.handleChange('emailId')}
											endAdornment={
												<InputAdornment position="end">{this.state.staticText}</InputAdornment>
											}
											aria-describedby="outlined-weight-helper-text"
											inputProps={{
												'aria-label': 'emailId',
											}}
											
										/>
										{this.state.emailId === '' ? (
											<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
												sorry, your username must be be between 6 and 30 characters long
											</FormHelperText>
										) : null}

										{/* {this.props.emailHandleStatus === false ? (
											<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
												That Username is taken, Try another
											</FormHelperText>
										) : null} */}
									</FormControl>
								</Grid>
								<p className={classes.combinationText}>You can use letters, numbers and periods</p>
								<a className={classes.currentAccount} href="#">
									{' '}
									Use my current email address instead
								</a>

								<Grid item xs={12} sm={6}>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant="outlined"
										size="small"
									>
										<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={this.state.showPassword ? 'text' : 'password'}
											value={this.state.password}
											onChange={this.handleChange('password')}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={this.handleClickShowPassword}
														onMouseDown={this.handleMouseDownPassword}
														edge="end"
													>
														{this.state.showPassword ? (
															<VisibilityIcon />
														) : (
															<VisibilityOffIcon />
														)}
													</IconButton>
												</InputAdornment>
											}
											labelWidth={70}
										/>
									</FormControl>
									{this.state.password === '' ? (
										<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
											Use 8 characters or more for your password
										</FormHelperText>
									) : null}
								</Grid>
								<Grid item xs={12} sm={6}>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant="outlined"
										size="small"
									>
										<InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
										<OutlinedInput
											type={this.state.showPassword ? 'text' : 'password'}
											value={this.state.confirmPw}
											onChange={this.handleChange('confirmPw')}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={this.handleClickShowPassword}
														onMouseDown={this.handleMouseDownPassword}
														edge="end"
													>
														{this.state.showPassword ? (
															<VisibilityIcon />
														) : (
															<VisibilityOffIcon />
														)}
													</IconButton>
												</InputAdornment>
											}
											labelWidth={70}
										/>
									</FormControl>
									{this.state.confirmPw === '' ? (
										<FormHelperText style={{ color: 'red' }} id="outlined-weight-helper-text">
											Those password didn't match try again
										</FormHelperText>
									) : null}
								</Grid>
								<p className={classes.passwordCombination}>
									Use 8 or more with mix of letters, numbers and symbol
								</p>
							</Grid>

							<div className={classes.lastdiv}>
								<div className={classes.usernameMsg} onClick={this.goToLoginPage}>
									Sign in instead
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
						</form>
					</div>
				</div>
				<div className="secondblock">
					<img className={classes.accountLogo} src={Account} alt="imageAccount" />
					<FormHelperText className={classes.imageHelpertext} id="outlined-weight-helper-text">
						One Account,All of google
					</FormHelperText>
					<FormHelperText className={classes.imageHelpertext1} id="outlined-weight-helper-text">
						{' '}
						working for you
					</FormHelperText>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(user);
