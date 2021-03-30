import React from "react";
import { useDispatch } from "react-redux"
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import * as Actions from "./../../../store/actions"
import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Button } from "@brinmi"

const useStyles = makeStyles((theme) => ({
  list: {
    "& .MuiListItemIcon-root": {
      minWidth: 40,
      color: theme.palette.grey[400],
    },
  },
  copyright: {
    background: theme.palette.background.paper,
  },
}));

const links = {
  col1: [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/" },
    { name: "About", path: "/" },
    { name: "Portals", path: "/" },
    { name: "Services", path: "/" },
    { name: "Join Us", path: "/" },
  ],
  col2: [
    { name: "Terms & Conditions", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Sponsors", path: "/" },
    { name: "Contacts", path: "/" },
  ],
};

export default function Footer(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-y-2 bg-gray-800 text-white text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 px-8 py-16 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-2xl text-green font-bold my-1">
              <img src="/logo.png" className="h-16" alt="" />
            </h3>
            <p>
              Brinmi Print is a book store that carter to adult and children
              with insightful collections, on leadership, finance, family,
              cartoons and more. Its also has various clubs for user to join.
            </p>
            <p className="text-gray-400 mt-2">
              Our books are best selling across the world
            </p>
          </div>
          <div>
            <h3 className="text-green">Company</h3>
            <List dense className={classes.list}>
              {links.col1.map((link) => (
                <ListItem key={link.name} disableGutters>
                  <ListItemText>{link.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <h3 className="text-green">Extras</h3>
            <List dense className={classes.list}>
              {links.col2.map((link) => (
                <ListItem key={link.name} disableGutters>
                  <ListItemText>{link.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-green">Contact</h3>
              <p>(+234) 708 895 7111</p>
              <p>info@brinmiprint.com</p>
              <div>
                <p>18 Saint Andrew Street New Layout,</p>
                <p>Island Lagos State, Nigeria 12008</p>
              </div>

              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(Actions.openPartnerWithUsDialog())}
              >
                Partner with Us
                </Button>
            </div>
          </div>
        </div>
      </div>
      <div aria-label="copyright" className={clsx(classes.copyright)}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between p-4">
            <span className="flex flex-col">
              <p className="text-blue text-base">
                Brinmi Print — Your online best selling store.
              </p>
              <p className="text-gray-600 text-xs">
                &copy;Copyright {new Date().getFullYear()} Brinmi Print Ltd. All
                rights reserved.
              </p>
            </span>
            <ul className="flex space-x-2">
              <li className="border-gray-400">
                <IconButton size="small">
                  <Icon>
                    <img src="/assets/social/facebook.svg" alt="" />
                  </Icon>
                </IconButton>
              </li>
              <li>
                <IconButton size="small">
                  <Icon>
                    <img src="/assets/social/twitter.svg" alt="" />
                  </Icon>
                </IconButton>
              </li>
              <li>
                <IconButton size="small">
                  <Icon>
                    <img src="/assets/social/instagram.svg" alt="" />
                  </Icon>
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
