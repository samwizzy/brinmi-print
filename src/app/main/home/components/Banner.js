import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from "../../../../@flare";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  button: {
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
  },
}));

export default function Banner(props) {
  const classes = useStyles(props);

  return (
    <div className="bg-gray-800 w-full h-96 border shadow-md overflow-hidden">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Typography variant="h4" className={classes.title}>
          Optisoft Flare
        </Typography>
        <p className="text-lg font-light text-gray-400 mb-8">
          Everything you need in one place
        </p>
        <a
          href="#register"
          className="border border-solid block border-green rounded-full px-8 py-2 no-underline text-lg uppercase text-green"
        >
          Join Flare
        </a>
      </div>
    </div>
  );
}
