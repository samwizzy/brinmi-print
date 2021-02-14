import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import Description from "./components/Description";
import Content from "./components/Content";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& button:focus": {
      outline: "none",
    },
  },
  currentCard: {
    flexGrow: 1,
    minHeight: 480,
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
    "& .MuiCardHeader-action": {
      marginTop: 0,
      marginRight: 0,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up("sm")]: {
      minHeight: "48px",
    },
  },
}));

export default function BookDetails(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card className={classes.currentCard}>
          <CardHeader
            title="Design Your Faith"
            subheader="by Jude Ibrahim"
            action={
              <IconButton>
                <GetAppIcon />
              </IconButton>
            }
          />
          <CardMedia
            className="w-full h-screen mb-96"
            image="https://image.freepik.com/free-psd/top-view-bookss-with-pen-flowers_23-2148568929.jpg"
          />
          <CardContent>
            <Paper elevation={0}>
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
                centered
              >
                <Tab label="Description" />
                <Tab label="Content" />
              </Tabs>
            </Paper>

            <div className={classes.toolbar} />

            <div>{value === 0 && <Description />}</div>
            <div>{value === 1 && <Content />}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
