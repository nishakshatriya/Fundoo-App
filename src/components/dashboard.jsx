import React, { Component } from 'react';
import '../scss/_dashboard.scss'
import { Grid, Snackbar, AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import keepIcon from '../assets/googleKeep.png';


class Dashboard extends Component {
	render() {
		return (
			<Grid item md={12} container >
            <AppBar className="app-bar">
                <Toolbar className="header">
					<img src={keepIcon} alt="logo" className="keep-icon" />
                    <Typography variant="h6" className="header-title" >
                       Keep
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
		);
	}
}

export default Dashboard;
