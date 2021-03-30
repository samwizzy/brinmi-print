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
  { name: "Book Club", path: "/", icon: "forum" },
  { name: "My Books", path: "/", icon: "local_library" },
  { name: "Partner with Us", path: "/partner", icon: "business" },
  { name: "Cart", path: "/account/cart", icon: "shopping_cart" },
  { name: "Notifications", path: "/account/notifications", icon: "notifications" },
];

const authPages = [
  { name: "Profile", path: "/account", icon: "person" },
  { name: "Help", path: "/help-center", icon: "help" },
  { name: "Settings", path: "/settings", icon: "settings" },
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
