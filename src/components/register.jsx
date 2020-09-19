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
										className={classes.textField}
										name="firstName"
										variant="outlined"
										size="small"
										margin="normal"
									/>
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										label="Last name"
										type="text"
										name="lastName"
										className={classes.textField}
										variant="outlined"
										size="small"
										margin="normal"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										label="Username"
										type="text"
										name="username"
										className={classes.textField}
										variant="outlined"
										size="small"
										margin="normal"
									/>
								</Grid>
								<p className={classes.combinationText}>You can use letters, numbers and periods</p>
								<a className={classes.currentAccount} href="#">
									{' '}
									Use my current email address instead
								</a>

								<Grid item xs={12} sm={6}>
									<TextField
										label="Password"
										type="password"
										name="password"
										className={classes.textField}
										variant="outlined"
										size="small"
										margin="normal"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										label="Confirm"
										type="password"
										name="confirm"
										className={classes.textField}
										variant="outlined"
										size="small"
										margin="normal"
									/>
								</Grid>
								<VisibilityOffIcon className=""></VisibilityOffIcon>

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
