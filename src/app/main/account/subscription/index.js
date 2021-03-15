import React, { useEffect } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import withReducer from "./../../../store/withReducer";
import * as Actions from "./../store/actions";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import { BrinmiUtils, Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  card: {
    "&.PREMIUM": {
      backgroundColor: "#F2BD28",
      color: theme.palette.secondary.contrastText,
      "& .MuiButton-root": {
        backgroundColor: "#ffffff",
        color: theme.palette.secondary.main,
      },
    },
    borderRadius: theme.spacing(4),
    padding: theme.spacing(2, 1),
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardActions-root": {
      justifyContent: "center",
    },
  },
}));

export function Subscriptions(props) {
  const classes = useStyles(props);
  const { getSubscriptions, subscriptions } = props;

  useEffect(() => {
    getSubscriptions();
  }, [getSubscriptions]);

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className=" text-2xl text-gray-800 font-semibold tracking-wide">
            User's Subscription
          </h2>
          <p className="text-sm text-gray-600 tracking-wide">
            Purchase and read books individual or subscribe to get full access
            to our books anytime
          </p>
        </div>
        <div className="mt-6">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {subscriptions.map((sub, i) => (
              <Card
                key={i}
                square
                elevation={1}
                className={clsx(classes.card, { [sub.id]: true })}
              >
                <CardHeader
                  title={sub.id}
                  titleTypographyProps={{ variant: "h5" }}
                />

                <CardContent>
                  <div className="flex flex-col space-y-6">
                    <p className="text-sm">{sub.description}</p>
                    <p className="text-lg tracking-wider">
                      {`${BrinmiUtils.formatCurrency(
                        sub.price
                      )} / ${BrinmiUtils.formatCurrency(
                        _.ceil(sub.price / sub.exchangeRateToDollar)
                      )}`}
                    </p>
                    <p className="text-sm">Paid Yearly</p>
                  </div>
                </CardContent>

                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    rounded
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ subReducer }) => {
  console.log(subReducer, "subReducersubReducer");
  return {
    subscriptions: subReducer.subscription.subscriptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getSubscriptions: Actions.getSubscriptions,
    },
    dispatch
  );
};

export default withReducer(
  "subReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Subscriptions));
