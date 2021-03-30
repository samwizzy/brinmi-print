import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  FormControlLabel,
  MenuItem,
  TextField,
  Switch,
} from "@material-ui/core";
import * as Actions from "./../../../../store/actions";
import { Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    "& .MuiCardActions-root": {
      padding: theme.spacing(2),
    },
  },
}));

const initialForm = {
  books: [{ amount: 0, bookId: 0 }],
  customerShippingEmail: "",
  customerShippingPhoneNumber: "",
  shipOrder: true,
  shippingAddress: "",
  shippingCity: "",
  shippingCountryId: "",
  shippingStateId: "",
  shippingZipCode: "",
  transactionMethod: "",
  transactionReference: "",
};

export default function ShoppingForm(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ ...initialForm });
  const countries = useSelector(({ brinmi }) => brinmi.location.countries);
  const states = useSelector(({ brinmi }) => brinmi.location.states);

  useEffect(() => {
    dispatch(Actions.getCountries());
    dispatch(Actions.getStates());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (form.shippingCountryId) {
      dispatch(Actions.getStateByCountry(form.shippingCountryId));
    }
  }, [dispatch, form.shippingCountryId]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  console.log(countries, "countries");
  console.log(states, "states");

  return (
    <div className="container">
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            Submit Your Order
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <Card className={classes.card}>
              <CardContent>
                <div className="space-y-4">
                  <TextField
                    label="Transaction Reference"
                    name="transactionReference"
                    value={form.transactionReference}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="select-transaction-method"
                    select
                    label="Transaction Method"
                    name="transactionMethod"
                    value={form.transactionMethod}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  >
                    <MenuItem value="">Select Method</MenuItem>
                  </TextField>
                  <TextField
                    label="Custom Shipping Email"
                    name="customerShippingEmail"
                    value={form.customerShippingEmail}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    label="Customer Shipping Phone Number"
                    name="customerShippingPhoneNumber"
                    value={form.customerShippingPhoneNumber}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />

                  <Divider />

                  <TextField
                    id="select-nationality"
                    select
                    label="Select Nationality"
                    name="shippingCountryId"
                    value={form.shippingCountryId}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  >
                    <MenuItem value="">Select Nationality</MenuItem>
                    {countries.map((country, i) => (
                      <MenuItem key={i} value={country.id}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="select-state"
                    select
                    label="Select State"
                    name="shippingStateId"
                    value={form.shippingStateId}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  >
                    <MenuItem value="">Select State</MenuItem>
                    {states.map((state, i) => (
                      <MenuItem key={i} value={state.id}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <div className="flex justify-between items-center space-x-4">
                    <TextField
                      id="shipping-city"
                      label="Shipping City"
                      name="shippingCity"
                      value={form.shippingCity}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                    <TextField
                      id="shipping-zipcode"
                      label="Shipping Zip Code"
                      name="shippingZipCode"
                      value={form.shippingZipCode}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>

                  <FormControlLabel
                    control={
                      <Switch
                        checked={form.shipOrder}
                        onChange={handleChange}
                        name="shipOrder"
                      />
                    }
                    label="Ship Order"
                  />

                  <TextField
                    label="Shipping Address"
                    name="shippingAddress"
                    value={form.shippingAddress}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </div>
              </CardContent>

              <CardActions>
                <div className="flex items-center justify-between space-x-4 md:space-x-0">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    rounded
                  >
                    Order
                  </Button>
                </div>
              </CardActions>
            </Card>

            <div className="bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
