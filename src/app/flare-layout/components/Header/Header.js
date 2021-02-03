import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { withRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Toolbar,
  Icon,
  IconButton,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Popover,
} from "@material-ui/core";
import { Button } from "../../../../@flare";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "./../Drawer/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.primary.dark,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    "&.hide": { display: "none" },
    [theme.breakpoints.up("sm")]: {},
  },
  button: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  avatar: { background: theme.palette.secondary.main },
  emailButton: {
    "& .MuiButton-startIcon": {
      textTransform: "UPPERCASE",
    },
    "& .MuiButton-label": {
      textTransform: "none",
    },
  },
  listIcon: { minWidth: 40 },
  navigation: {
    "& a": {
      color: theme.palette.grey[500],
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.secondary.light,
        textDecoration: "none",
      },
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("md")]: {
      minHeight: "48px",
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "48px",
    },
  },
}));

export default withRouter(function Header(props) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector(({ auth }) => auth.user.data);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const _open = Boolean(anchorEl);
  const id = _open ? "auth-popover" : undefined;

  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar /* { [classes.appBarShift]: open }*/)}
      >
        <Toolbar variant="dense">
          <div className="w-full flex items-center justify-between text-sm">
            <div className="flex items-center">
              <img
                className={clsx("img h-9 mr-8")}
                src="/assets/logo.png"
                alt="logo"
              />
              <div
                className={clsx(
                  classes.navigation,
                  "sm:flex sm:flex-1 flex-grow md:space-x-6 sm:space-x-1 hidden"
                )}
              >
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/brands">Brands</Link>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {user.role ? (
                <Fragment>
                  <Button
                    aria-describedby={id}
                    onClick={handleClick}
                    color="inherit"
                    className={classes.emailButton}
                    startIcon={
                      <Avatar className={classes.avatar}>
                        {user.email[0]}
                      </Avatar>
                    }
                  >
                    {user.email}
                    <Icon
                      className="text-16 ml-4 hidden sm:flex tran"
                      variant="action"
                    >
                      keyboard_arrow_down
                    </Icon>
                  </Button>
                  <Popover
                    id={id}
                    open={_open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Fragment>
                      <MenuItem component={Link} to="/profile">
                        <ListItemIcon className={classes.listIcon}>
                          <Icon>person</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Profile" />
                      </MenuItem>
                      <MenuItem component={Link} to="/logout">
                        <ListItemIcon className={classes.listIcon}>
                          <Icon>lock</Icon>
                        </ListItemIcon>
                        <ListItemText className="pl-0" primary="Logout" />
                      </MenuItem>
                    </Fragment>
                  </Popover>
                </Fragment>
              ) : (
                <Fragment>
                  {/* <Button
                    className={clsx(classes.button, "hover:text-white")}
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button> */}
                  {/* <Button
                    className={clsx(classes.button, "hover:text-white")}
                    variant="outlined"
                    color="secondary"
                  >
                    Sign up
                  </Button> */}
                  <a
                    href="#register"
                    className="border border-solid block border-green rounded-sm px-4 py-1 md:px-8 no-underline text-sm uppercase text-green"
                  >
                    Join Flare
                  </a>
                </Fragment>
              )}

              <div className="flex md:hidden">
                <IconButton
                  className={clsx(
                    classes.menuButton,
                    { hide: open },
                    "focus:outline-none"
                  )}
                  edge="end"
                  color="secondary"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.toolbar} />

      <Drawer open={open} handleDrawerClose={handleDrawerClose} user={user} />
    </div>
  );
});
