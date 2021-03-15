import React from "react";
import { BrinmiUtils } from "@brinmi";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
import * as appActions from "./../../../store/actions";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardMedia-root": {
      width: theme.spacing(10),
      height: theme.spacing(12),
      marginRight: theme.spacing(1),
    },
    "& .MuiCardActionArea-root": {
      "&:focus": {
        outline: "none",
      },
    },
    "& .MuiCardContent-root": {
      flexGrow: 1,
    },
  },
}));

const earnings = [
  {
    title: "New Book Alert",
    description: "This is the description for this book",
    price: 150000,
  },
  {
    title: "Review Your Subscription",
    description: "This is the description for this book",
    price: 250000,
  },
  {
    title: "New Book Alert",
    description: "This is the description for this book",
    price: 450000,
  },
  {
    title: "Spiritual Guideline",
    description: "This is the description for this book",
    price: 720000,
  },
];

export function MyEarnings(props) {
  const classes = useStyles(props);

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            My Earnings
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-4">
          {earnings.map((earning, i) => (
            <Card key={i} className={classes.card}>
              <CardMedia
                className="flex-shrink-0"
                image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
              />

              <CardContent>
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <h3 className="text-base">{earning.title}</h3>
                    <p className="text-lg font-light text-green mt-4">
                      {BrinmiUtils.formatCurrency(earning.price)}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 text-xs">
                    <p className="flex justify-between items-center space-x-2 text-right">
                      <span>4.5</span>
                      <StarBorderIcon
                        fontSize="small"
                        className="text-yellow-500"
                      />
                    </p>
                    <p className="flex justify-between items-center space-x-2 text-right">
                      <span>25</span>
                      <CloudDownloadOutlinedIcon
                        fontSize="small"
                        className="text-yellow-500"
                      />
                    </p>
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

const mapStateToProps = ({ earningReducer }) => {
  console.log(earningReducer, "earningReducer");
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
  "earningReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(MyEarnings));
