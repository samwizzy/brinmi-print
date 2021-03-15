import React from "react";
import {bindActionCreators} from "redux"
import { connect, useSelector } from "react-redux";
import * as Actions from "./../store/actions"
import reducer from "./../store/reducers"
import withReducer from "./../../../store/withReducer"
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
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import MyBooks from "./components/MyBooks";

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

function AccountDetails(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);
  const user = useSelector(({ auth }) => auth.user.data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(user, "user account details");

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
                <Tab label="Profile" />
                <Tab label="My Books" />
                <Tab label="Settings" />
              </Tabs>
            </Paper>

            <div className={classes.toolbar} />

            <div>{value === 0 && <Profile user={user} />}</div>
            <div>{value === 1 && <MyBooks />}</div>
            <div>{value === 2 && <Settings />}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = ({accountReducer}) => {
  console.log(accountReducer, "accountReducer")
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserBooks: Actions.getUserBooks
  }, dispatch)
}

export default withReducer("accountReducer", reducer)(connect(mapStateToProps, mapDispatchToProps)(AccountDetails))