import React from "react";
import { Grid, Typography, Card , Button} from "@material-ui/core";
import '../css/_notes.scss'
import { withStyles } from '@material-ui/core/styles';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';


const useStyles = (theme) => ({
 Maincard:{
   boxShadow: "3px 3px 3px 3px rgba(0.1,0.1,0.1,0.1)",
   padding:"10px 10px 10px 10px",
   width:"50%",
   marginLeft:"250px",
   marginTop:"-50px"
 }
});



class Notes extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className="note">
        <Grid item md={this.props.isDrawerOpen ? 12 : 10}>
          <Card variant="outlined" className={classes.Maincard}>
            <Typography className="main-card-title">Title</Typography>
            <Typography className="main-card-notes">Take a notes...</Typography>
            <div className="Icons-Buttons">
              <div className="icons">
                <div className="icon"><AddAlertOutlinedIcon/></div>
                <div className="icon"><PersonAddOutlinedIcon/></div>
                <div className="icon"><ColorLensOutlinedIcon/></div>
                <div className="icon"><ArchiveOutlinedIcon/></div>
                <div className="icon"><MoreVertOutlinedIcon/></div>
                <div className="icon"><UndoOutlinedIcon/></div>
                <div className="icon"><RedoOutlinedIcon/></div>
              </div>
              <Button className="close-button">Close</Button>
            </div>
            
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Notes);