import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import withReducer from "./../../../store/withReducer";
import * as Actions from "./../store/actions";
import reducer from "./../store/reducers";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { Button, BrinmiUtils } from "@brinmi";
import ShippingDialog from "./components/ShippingDialog";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    "& .MuiCardContent-root": {
      width: "100%",
    },
  },
}));

const carts = [
  {
    title: "Design Your Faith",
    description: "This is the description for this book",
    price: 150000,
  },
  {
    title: "Spiritual Guideline",
    description: "This is the description for this book",
    price: 120000,
  },
  {
    title: "Outwitting the Devil",
    description: "This is the description for this book",
    price: 520000,
  },
];

export function Cart(props) {
  const classes = useStyles(props);
  const { openShippingDialog } = props;

  return (
    <div className="w-full bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {carts.map((cart, i) => (
            <Card key={i} className={classes.card}>
              <CardMedia
                className="w-full h-64"
                image="https://image.freepik.com/free-psd/high-angle-turned-open-book-mock-up_23-2148657114.jpg"
              />

              <CardContent>
                <div className="w-full">
                  <h3 className="text-base">{cart.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {cart.description}
                  </p>
                  <h3 className="text-lg font-light text-green mt-2">
                    {BrinmiUtils.formatCurrency(cart.price)}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8 px-2">
          <h3 className="text-gray-800">Total</h3>
          <h3 className="text-green">
            {BrinmiUtils.formatCurrency(
              carts.reduce((n, row) => n + row.price, 0)
            )}
          </h3>
        </div>

        <div className="flex justify-start mt-8">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            rounded
            onClick={openShippingDialog}
          >
            Checkout
          </Button>
        </div>

        <ShippingDialog />
      </div>
    </div>
  );
}

const mapStateToProps = ({ cartReducer }) => {
  console.log(cartReducer, "cartReducer");
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openShippingDialog: Actions.openShippingDialog,
    },
    dispatch
  );
};

export default withReducer(
  "cartReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(Cart));
