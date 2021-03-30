import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect, useSelector } from "react-redux";
import * as Actions from "./../store/actions";
import reducer from "./../store/reducers";
import withReducer from "./../../../store/withReducer";
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
import Profile from "./tabs/Profile";
import Settings from "./tabs/Settings";
import MyBooks from "./tabs/MyBooks";
import ProfileDialog from "./dialogs/ProfileDialog";
import PasswordDialog from "./dialogs/PasswordDialog";
import AuthorDialog from "./dialogs/AuthorDialog";

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
  const { getUserBooks, books, openProfileDialog } = props;
  const [value, setValue] = React.useState(0);
  const user = useSelector(({ auth }) => auth.user.data);

  useEffect(() => {
    getUserBooks();
  }, [getUserBooks]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(user, "user account details");
  console.log(books, "books account details");

  return (
    <div className="w-full bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <Card className={classes.card}>
          <CardHeader
            title={user?.fullName}
            subheader={user?.email}
            avatar={
              <Avatar>
                <PersonOutlineIcon />
              </Avatar>
            }
            action={
              <IconButton onClick={openProfileDialog}>
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
            <div>{value === 1 && <MyBooks books={books} />}</div>
            <div>{value === 2 && <Settings user={user} />}</div>
          </CardContent>
        </Card>
      </div>

      <ProfileDialog />
      <PasswordDialog />
      <AuthorDialog />
    </div>
  );
}

const mapStateToProps = ({ accountReducer }) => {
  return {
    books: accountReducer.books.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserBooks: Actions.getUserBooks,
      openProfileDialog: Actions.openProfileDialog,
      openPasswordDialog: Actions.openPasswordDialog,
    },
    dispatch
  );
};

export default withReducer(
  "accountReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(AccountDetails));
