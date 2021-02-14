import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import { BrinmiUtils, Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  card: {
    "&.premium": {
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

const packages = [
  {
    name: "Basic",
    color: "basic",
  },
  {
    name: "Premium",
    color: "premium",
  },
];

export function Subscriptions(props) {
  const classes = useStyles(props);

  return (
    <div className="w-full bg-gray-200 py-16">
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
            {packages.map((sub, i) => (
              <Card
                square
                elevation={0}
                className={clsx(classes.card, { [sub.color]: true })}
              >
                <CardHeader
                  title={sub.name}
                  titleTypographyProps={{ variant: "h5" }}
                />

                <CardContent>
                  <div className="flex flex-col space-y-6">
                    <p className="text-sm">Access to all books for a year</p>
                    <p className="text-lg tracking-wider">
                      {`${BrinmiUtils.formatCurrency(2000)} / $20`}
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default withReducer(
  "subReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Subscriptions));
