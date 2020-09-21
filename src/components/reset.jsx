import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/google2.0.0.jpg';
import '../css/login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
        padding:'5px'
	},
	lastdiv: {
		paddingBottom: '30px',
    },
});

class ResetPassword extends Component {
	state = {
		validate: true,
		password: null,
        confirmPw: null,
        newpassword:null,
        reenterpassword:null,
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

	render() {
		const { classes } = this.props;
		return (
			<div className="root">
				<img className="logo" src={Logo} alt="GoogleImage" />

				<Grid item xs={12}>
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
                <Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
						<InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
						<OutlinedInput
							label="New Password"
							id="outlined-adornment-password"
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
                <Grid item xs={12}>
					<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
						<InputLabel htmlFor="outlined-adornment-password">Re-enter Password</InputLabel>
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
