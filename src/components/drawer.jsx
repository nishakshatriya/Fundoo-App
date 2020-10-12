import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import '../css/_drawer.scss';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      marginTop:'65px'
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      marginBottom="5px"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.drawerOpen,
        [classes.drawerClose]: !props.drawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.drawerOpen,
          [classes.drawerClose]: !props.drawerOpen,
        }),
      }}

      onMouseOver={(props.menuOpen)} onMouseOut={props.menuClose}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.menuClose}>
          {theme.direction === "ltr" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <List className="list-icons">
      {['Notes', 'Reminders', 'nisha', 'Edit labels', 'Archive','Trash'].map((text, index) => (
            <ListItem button key={text}> 
              <ListItemIcon >{index === 0 ? <div><EmojiObjectsOutlinedIcon /></div>: index === 1 ? <div><NotificationsNoneIcon/></div>: index === 2 ?<div><LabelOutlinedIcon/></div> : index === 3 ? <div><EditOutlinedIcon/></div>: index === 4 ? <div><ArchiveOutlinedIcon/></div>:<div><DeleteOutlineOutlinedIcon/></div> }</ListItemIcon>
              <ListItemText className="textss" primary={text}/>  
            </ListItem>
          ))}
      </List>
    </Drawer>
  );
}