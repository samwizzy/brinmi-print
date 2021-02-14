import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const pages = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Contact", path: "/", icon: "contacts" },
  { name: "Checkout", path: "/", icon: "shopping_cart" },
  { name: "Wishlist", path: "/", icon: "local_mall" },
];

const authPages = [
  { name: "Profile", path: "/profile", icon: "person" },
  { name: "Logout", path: "/logout", icon: "exit_to_app" },
];

export default function NavigationList(props) {
  const { user } = props;

  return (
    <div>
      <List>
        {pages.map((page, index) => (
          <ListItem button key={page.name} component={Link} to={page.path}>
            <ListItemIcon>
              <Icon>{page.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {user.role ? (
        <List>
          {authPages.map((page, index) => (
            <ListItem button key={page.name} component={Link} to={page.path}>
              <ListItemIcon>
                <Icon>{page.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          <ListItem button>
            <ListItemIcon>
              <Icon>lock_open</Icon>
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      )}
    </div>
  );
}
