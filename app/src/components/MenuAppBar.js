import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Stock Kings
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component="a" href="/">
            <ListItemIcon />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/main">
            <ListItemIcon />
            <ListItemText primary="Main" />
          </ListItem>
          <ListItem button component="a" href="/portfolio">
            <ListItemIcon />
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button component="a" href="/competition">
            <ListItemIcon />
            <ListItemText primary="Competition" />
          </ListItem>
          <ListItem button component="a" href="/chat">
            <ListItemIcon />
            <ListItemText primary="Chat" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component="a" href="/profile">
            <ListItemIcon />
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component="a" href="/bug">
            <ListItemIcon />
            <ListItemText primary="Report Bug" />
          </ListItem>
          <ListItem button component="a" href="/register">
            <ListItemIcon />
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
