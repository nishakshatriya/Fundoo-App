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
	validate: true,
	password: '',
	confirmPw: '',
	newpassword:'',
	reenterpassword:'',
	count: 0,
	showPassword: false,
	passwordError:'',
	newpasswordError:'',
	reenterpasswordError:''
};

const passwordRegexpattern = '^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$'
class ResetPassword extends Component {
	state = {
		email:'',
		validate: true,
		password:'',
        confirmPw:'',
        newpassword:'',
        reenterpassword:'',
		count: 0,
		showPassword: false,
		passwordError:'',
		newpasswordError:'',
		reenterpasswordError:''
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

	validate = () => {
		let emailError='';
		let passwordError = '';
		let newpasswordError='';
		let reenterpasswordError='';

		if (!this.state.email.includes("@")) {
			emailError = '**Please Enter Valid email**';
		}
		if (!this.state.password.includes(passwordRegexpattern)) {
			passwordError = '**Please Enter Valid Password**';
		}

		if (!this.state.newpassword.includes(passwordRegexpattern)) {
			newpasswordError = '**Password doesnt Match**';
		}

		if (!this.state.reenterpassword.includes(passwordRegexpattern)) {
			reenterpasswordError = '**Password doesnt Match**';
		}

		if (passwordError) {
			this.setState({ passwordError});
			return false;
		}

		if (emailError) {
			this.setState({ emailError});
			return false;
		}

		if (newpasswordError) {
			this.setState({ newpasswordError});
			return false;
		}

		if (reenterpasswordError) {
			this.setState({ reenterpasswordError});
			return false;
		}
		return true;
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			console.log(this.state);
			this.setState(initial);
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<div className="root">
				<img className="logo" src={Logo} alt="GoogleImage" />
				<p className={classes.resetText}>Reset Password</p>
				<TextField
					label="Email or Phone"
					type="text"
					value={this.state.email}
					className={classes.textField}
					name="emailId"
					variant="outlined"
					margin="normal"
					onChange={this.updateState}
				/>
				<div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
				{/* <Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
						<InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
						<OutlinedInput
							label="Current Password"
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
										{this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
									</IconButton>
								</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
				</Grid>
				<div className={classes.errorTexts}>{this.state.passwordError}</div>
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
                <Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
						<InputLabel htmlFor="outlined-adornment-reenterpassword">Re-enter Password</InputLabel>
						<OutlinedInput
							label="Re-enter Password"
							id="outlined-adornment-password re-enter"
							type={this.state.showPassword ? 'text' : 'password'}
							value={this.state.reenterpassword}
							onChange={this.handleChange('reenterpassword')}
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
				<div className={classes.errorTexts}>{this.state.reenterpasswordError}</div>
				<p className={classes.CombinationNote}>*Use atleast one special character, one number, one character and six digit long*</p> */}

				<div className={classes.lastdiv}>
					<Button
						className={classes.nextButton}
						variant="contained"
						color="primary"
						href="/loginNext"
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
