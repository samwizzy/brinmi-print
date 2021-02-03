import React from "react";
import _ from "lodash";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Button } from "../../../../@flare";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  list: {
    "& .MuiListItemIcon-root": {
      minWidth: 40,
      color: theme.palette.grey[400],
    },
  },
  copyright: {
    background: theme.palette.primary.dark,
  },
}));

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Services", path: "/" },
  { name: "Contacts", path: "/" },
];

export default function Footer(props) {
  const classes = useStyles(props);

  return (
    <div className="flex flex-col gap-y-2 bg-gray-800 text-white text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 px-8 py-16">
          <div>
            <h3 className="text-2xl text-green font-bold my-1">Flare</h3>
            <p>
              This is a program geared towards projecting our core projects and
              best of Optisoft products, in very detailed order.{" "}
            </p>
            <p className="text-gray-400 mt-2">
              We provide solutions to our client's brilliant ideas.
            </p>

            <div className="flex flex-col space-y-2 mt-4">
              <div className="">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Newletter
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="mt-1 py-2 px-2 focus:outline-none border-0 block w-full sm:text-sm rounded-md"
                />
              </div>
              <div className="">
                <Button color="secondary" variant="outlined">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div>
            <List dense className={classes.list}>
              {links.map((link) => (
                <ListItem key={link.name}>
                  <ListItemText>{link.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <List dense className={classes.list}>
              {_.range(0, 8).map((link) => (
                <Skeleton key={link} />
              ))}
            </List>
          </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-green">Contact Info</h3>
              <p>(+234) 708 895 7111</p>
              <p>info@flare.optisoft.ng</p>
              <div>
                <p>Suite 808, 8th Floor, Mandilas Mall,</p>
                <p>No 96/102, Broad Street, Marina,</p>
                <p>Lagos Island | Lagos - Nigeria.</p>
              </div>
              <a
                className="border border-solid block border-green rounded-sm px-4 py-2 uppercase no-underline text-green"
                target="_blank"
                rel="noreferrer"
                href="https://wa.link/7k3hxq"
              >
                Chat with Us on WhatsApp
              </a>
            </div>

            <ul className="flex space-x-2 mt-4">
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
      <div
        aria-label="copyright"
        className={clsx(
          classes.copyright,
          "flex flex-col items-center justify-center p-4 space-y-1"
        )}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p>&reg;Optisoft Flare — Our products or its affiliates.</p>
          <p className="text-gray-200 text-xs">
            Copyright {new Date().getFullYear()} Optisoft Technology Company
            (Nig.) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
