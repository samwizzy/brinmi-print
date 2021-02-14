import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import Description from "./components/Description";

const useStyles = makeStyles((theme) => ({
  currentCard: {
    position: "relative",
    borderRadius: theme.spacing(2),
    "& .MuiCardMedia-root": {
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
    "& .MuiCardContent-root": {
      borderRadius: theme.spacing(2, 2, 0, 0),
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("sm")]: {
      minHeight: "48px",
    },
  },
}));

export default function EarningDetails(props) {
  const classes = useStyles(props);

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card className={classes.currentCard}>
          <CardMedia
            className="w-full h-screen"
            image="https://image.freepik.com/free-psd/top-view-bookss-with-pen-flowers_23-2148568929.jpg"
          />
          <CardContent>
            <div className={classes.toolbar} />

            <Description />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
