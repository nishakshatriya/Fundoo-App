
import React from "react";
import { Snackbar, Typography } from "@material-ui/core";
import AppBar from "../components/appBar";
import MiniDrawer from "./drawer";
import Notes from "../components/notes";

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
          menuOpen={this.handleDrawerOpen}
          menuClose={this.handleDrawerClose}
          drawerOpen={this.state.drawerOpen}
        />
        <main className="content">
          <Typography paragraph>
            <Notes/>
          </Typography>
        </main>
      </div>
    );
  }
}

export default Dashboard;