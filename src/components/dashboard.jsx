// import React, { Component } from 'react';
// import '../scss/_appBar.scss';
// import { Grid, AppBar, IconButton, Toolbar, Typography, InputBase } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import ClearIcon from '@material-ui/icons/Clear';
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import keepIcon from '../assets/googleKeep.png';
// import userProfie from '../assets/userProfile.jpg';
// import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
// import Drawer from '../components/drawer';

// class Dashboard extends Component {

// 	state = {
// 		drawerOpen: true
// 	};

// 	handleDrawerOpen = () => {
// 		this.setState({
// 		  drawerOpen: true,
// 		});
// 	  };
	
// 	  handleDrawerClose = () => {
// 		this.setState({
// 		  drawerOpen: false,
// 		});
// 	  };

// 	render() {
// 		return (
// 			<Grid item md={12} container>
// 				<AppBar className="app-bar">
// 					<Toolbar className="header">
// 						<IconButton edge="start">
// 							<MenuIcon className="menu-icon" />
// 						</IconButton>
// 						<img src={keepIcon} alt="logo" className="keep-icon" />
// 						<Typography variant="h6" className="header-title">
// 							Keep
// 						</Typography>
// 						<div className="header-search">
// 							<div className="search header-icon">
// 								<SearchIcon />
// 							</div>
// 							<InputBase
// 								placeholder="Search"
// 								className="header-input-root header-input-input"
// 								inputProps={{ 'aria-label': 'search' }}
// 							/>
// 							<div className="header-icon clear">
// 								<ClearIcon />
// 							</div>
// 						</div>
// 						<div className="top-menu">
// 							<div className="header-icon refresh">
// 								<RefreshIcon />
// 							</div>
// 							<div className="header-icon setting">
// 								<SettingsOutlinedIcon />
// 							</div>
// 						</div>
// 						<div className="header-icon list">
// 							<AppsOutlinedIcon />
// 						</div>
// 						<div className="user-profile">
// 							<img src={userProfie} className="user-icon" alt="profile-icon" />
// 						</div>
// 					</Toolbar>
// 				</AppBar>
// 				<Drawer />
// 			</Grid>
// 		);
// 	}
// }

// export default Dashboard;

import React from "react";
import { Snackbar, Typography } from "@material-ui/core";
import AppBar from "../components/appBar";
import MiniDrawer from "../components/drawerr";
// import Notes from "../components/notes";

class Dashboard extends React.Component {
  state = {
    snackbarMessage: "hello",
    snackbarStatus: false,
    drawerOpen: false,
  };

  handleSnackbarClose = (event, reason) => {
    console.log(event, reason);
    this.setState({
      snackbarStatus: false,
    });
  };

  handleDrawerOpen = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={this.state.snackbarStatus}
          onClose={this.handleSnackbarClose}
          autoHideDuration={2000}
          message={this.state.snackbarMessage}
        />
        <AppBar 
          menuOpen={this.handleDrawerOpen}
          drawerOpen={this.state.drawerOpen}
        />
        <MiniDrawer
          menuClose={this.handleDrawerClose}
          drawerOpen={this.state.drawerOpen}
        />
        <main className="content">
          <Typography paragraph>
            {/* <Notes/> */}

          </Typography>
        </main>
      </div>
    );
  }
}

export default Dashboard;