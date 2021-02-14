import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Description from "./components/Description";
import Content from "./components/Content";

const useStyles = makeStyles((theme) => ({
  tabs: {
    "& button:focus": {
      outline: "none",
    },
  },
  card: {
    borderRadius: theme.spacing(2),
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

export default function AccountDetails(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card className={classes.card}>
          <CardHeader
            title="John Doe"
            subheader="by Jude Ibrahim"
            avatar={
              <Avatar>
                <PersonOutlineIcon />
              </Avatar>
            }
            action={
              <IconButton>
                <EditOutlinedIcon />
              </IconButton>
            }
          />

          <CardContent>
            <Paper elevation={0}>
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="primary"
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
