import React, { Component } from 'react';
import '../scss/_dashboard.scss';
import { Grid, Snackbar, AppBar, IconButton, Toolbar, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import ClearIcon from '@material-ui/icons/Clear';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import keepIcon from '../assets/googleKeep.png';
import userProfie from '../assets/userProfile.jpg';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

class Dashboard extends Component {
	render() {
		return (
			<Grid item md={12} container>
				<AppBar className="app-bar">
					<Toolbar className="header">
						<IconButton edge="start">
							<MenuIcon className="menu-icon" />
						</IconButton>
						<img src={keepIcon} alt="logo" className="keep-icon" />
						<Typography variant="h6" className="header-title">
							Keep
						</Typography>
						<div className="header-search">
							<div className="search header-icon">
								<SearchIcon />
							</div>
							<InputBase
                                placeholder="Search"
								className="header-input-root header-input-input"
								inputProps={{ 'aria-label': 'search' }}
							/>
							<div className="header-icon clear">
								<ClearIcon />
							</div>
						</div>
						<div className="top-menu">
							<div className="header-icon refresh">
								<RefreshIcon />
							</div>
							<div className="header-icon setting">
								<SettingsOutlinedIcon />
							</div>
						</div>
						<div className="header-icon list">
							<AppsOutlinedIcon />
						</div>
						<div className="user-profile">
							<img src={userProfie} className="user-icon" alt="profile-icon" />
						</div>
					</Toolbar>
				</AppBar>
			</Grid>
		);
	}
}

export default Dashboard;
