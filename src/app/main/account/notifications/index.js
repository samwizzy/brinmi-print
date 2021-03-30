import React from "react";
import moment from "moment"
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
import * as appActions from "./../../../store/actions";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardMedia-root": {
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: "50%",
      marginRight: theme.spacing(1),
    },
    "& .MuiCardActionArea-root": {
      "&:focus": {
        outline: "none",
      },
    },
  },
}));

export function Notifications(props) {
  const classes = useStyles(props);
  const notifications = useSelector(({ brinmi }) => brinmi.notification.notifications);

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            Notifications
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4">
          {notifications.map((notification, i) => (
            <Card key={i} className={classes.card}>
              <CardMedia
                className="flex-shrink-0"
                image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
              />

              <CardContent>
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <h3 className="text-base">{notification.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1 text-xs whitespace-nowrap">
                    <span>{moment(notification.recordStatus.createdAt).format("ll")}</span>
                    <span>{moment(notification.recordStatus.createdAt).format("hh:mm a")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ noteReducer }) => {
  console.log(noteReducer, "noteReducer");
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openShippingDialog: appActions.openShippingDialog,
    },
    dispatch
  );
};

export default withReducer(
  "noteReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Notifications));
