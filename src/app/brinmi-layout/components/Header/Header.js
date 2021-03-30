import React, { Fragment, useState, useEffect } from "react";
import clsx from "clsx";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "./../../../auth/store/actions";
import * as appActions from "./../../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Divider,
  Icon,
  IconButton,
  ListItemText,
  ListItemIcon,
  MenuItem,
  Popover,
  Toolbar,
} from "@material-ui/core";
import { Button } from "../../../../@brinmi";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
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
    [theme.breakpoints.down("md")]: {
      minHeight: "64px",
    },
  },
}));

const links = [
  { name: "Profile", icon: "person", path: "/account" },
  { name: "My Books", icon: "library_books", path: "/account/books" },
  { name: "My Earnings", icon: "local_mall", path: "/account/earnings" },
];

const extraLinks = [
  { name: "Logout", icon: "lock", path: "/logout", action: Actions.logout },
  { name: "Settings", icon: "settings", path: "/account" },
  { name: "Help Center", icon: "help_outline", path: "/help-center" },
];

export default withRouter(function Header(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector(({ auth }) => auth.user.data);
  const cart = useSelector(({ cart }) => cart.cart.data);
  const notifications = useSelector(
    ({ brinmi }) => brinmi.notification.notifications
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(appActions.getCarts());
    dispatch(appActions.getNotifications());
  }, [dispatch]);

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

  const handleLink = (fn) => {
    dispatch(fn());
    handleClose();
  };

  const _open = Boolean(anchorEl);
  const id = _open ? "auth-popover" : undefined;

  console.log(user, "user from header");
  console.log(cart, "cart from header");
  console.log(notifications, "notifications from header");

  return (
    <div className="border-0 border-b border-solid border-gray-200">
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <div className="w-full md:max-w-7xl md:mx-auto px-4 lg:px-8 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className={clsx("img h-14 mr-8")}
                  src="/logo.png"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <div
                className={clsx(
                  classes.navigation,
                  "sm:flex sm:flex-1 flex-grow md:space-x-6 sm:space-x-1 hidden mr-4"
                )}
              >
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/account/cart">Cart</Link>
                <Link to="/account">Account</Link>
              </div>
              {user.role.length ? (
                <Fragment>
                  <IconButton component={Link} to="/account/notifications">
                    <Badge
                      badgeContent={notifications?.length}
                      color="secondary"
                    >
                      <NotificationsNoneIcon />
                    </Badge>
                  </IconButton>
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
                    My Account
                    <Icon
                      className="text-16 ml-4 hidden sm:flex tran"
                      variant="action"
                    >
                      keyboard_arrow_down
                    </Icon>
                  </Button>
                  <IconButton component={Link} to="/account/books/new">
                    <AddCircleOutlineIcon />
                  </IconButton>
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
                      {links.map((link, i) => (
                        <MenuItem key={i} component={Link} to={link.path}>
                          <ListItemIcon className={classes.listIcon}>
                            <Icon>{link.icon}</Icon>
                          </ListItemIcon>
                          <ListItemText className="pl-0" primary={link.name} />
                        </MenuItem>
                      ))}
                      <Divider />
                      {extraLinks.map((link, i) =>
                        link.action ? (
                          <MenuItem
                            key={i}
                            component={Link}
                            to={link.path}
                            onClick={() => handleLink(link.action)}
                          >
                            <ListItemIcon className={classes.listIcon}>
                              <Icon>{link.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText
                              className="pl-0"
                              primary={link.name}
                            />
                          </MenuItem>
                        ) : (
                          <MenuItem key={i} component={Link} to={link.path}>
                            <ListItemIcon className={classes.listIcon}>
                              <Icon>{link.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText
                              className="pl-0"
                              primary={link.name}
                            />
                          </MenuItem>
                        )
                      )}
                    </Fragment>
                  </Popover>
                </Fragment>
              ) : (
                <Fragment>
                  <Button
                    className={clsx(classes.button)}
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/sign-in"
                  >
                    Login
                  </Button>
                  <Button
                    className={clsx(classes.button)}
                    variant="outlined"
                    color="secondary"
                    component={Link}
                    to="/sign-up"
                  >
                    Sign up
                  </Button>
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
