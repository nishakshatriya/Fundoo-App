import React, { Component } from 'react';
import '../scss/_dashboard.scss'
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

class Dashboard extends Component {
	render() {
		return (
			<AppBar position="static" className='Appbar'>
				<Toolbar>
					<IconButton edge="start" className="menuButton" color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>
					<Typography className="title" variant="h6" noWrap>
						Material-UI
					</Typography>
					<div className="search">
						<div className="searchIcon">
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Dashboard;
