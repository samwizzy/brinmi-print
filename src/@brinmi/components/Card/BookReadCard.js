import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  currentCard: {
    height: 350,
    position: "relative",
    borderRadius: theme.spacing(2),
    "& .MuiCardContent-root": {
      borderRadius: theme.spacing(2, 2, 0, 0),
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  linearProgress: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    height: 10,
    borderRadius: 5,
  },
}));

export default function BookReadCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.currentCard}>
      <CardMedia
        className="w-full h-64"
        image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
      />
      <CardContent>
        <div className="flex flex-col">
          <h3 className="text-base">Design Your Faith</h3>
          <p className="text-sm text-gray-600 mb-2">by Jude Ibrahim</p>

          <div className="flex justify-between text-sm space-x-4 my-2">
            <h3 className="">Progress</h3>
            <Divider orientation="vertical" flexItem />
            <h3 className="">65%</h3>
          </div>

          <LinearProgress
            className={classes.linearProgress}
            color="secondary"
          />
        </div>
      </CardContent>
    </Card>
  );
}
