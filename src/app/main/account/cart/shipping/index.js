import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  FormControlLabel,
  MenuItem,
  TextField,
  Switch,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import * as Actions from './../../../../store/actions';
import { Button } from '@brinmi';
import PaystackWizard from './PaystackWizard';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    '& .MuiCardActions-root': {
      padding: theme.spacing(2),
    },
  },
}));

const initialForm = {
  books: [{ amount: 0, bookId: 0 }],
  customerShippingEmail: '',
  customerShippingPhoneNumber: '',
  shipOrder: true,
  shippingAddress: '',
  shippingCity: '',
  shippingCountryId: '',
  shippingStateId: '',
  shippingZipCode: '',
  transactionMethod: '',
  transactionReference: '',
};

export default function ShoppingForm(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const cart = useSelector(({ cart }) => cart.cart.data);
  const loading = useSelector(({ cart }) => cart.order.loading);
  const [form, setForm] = useState({ ...initialForm });
  const countries = useSelector(({ brinmi }) => brinmi.location.countries);
  const states = useSelector(({ brinmi }) => brinmi.location.states);

  useEffect(() => {
    dispatch(Actions.getCountries());
    dispatch(Actions.getStates());
  }, [dispatch]);

  useEffect(() => {
    const books = cart.map((c) => ({
      bookId: c.book.id,
      amount: c.book.price,
    }));
    setForm((state) => ({ ...state, books }));
  }, [cart]);

  useEffect(() => {
    if (form.shippingCountryId) {
      dispatch(Actions.getStateByCountry(form.shippingCountryId));
    }
  }, [dispatch, form.shippingCountryId]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleReferenceChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(Actions.submitOrder(form));
  };

  const canSubmit = () => {
    const { shipOrder, shippingCountryId, shippingStateId, ...rest } = form;
    return _.some(rest, _.isEmpty);
  };

  console.log(countries, 'countries');
  console.log(states, 'states');
  console.log(form, 'form');
  console.log(loading, 'loading');

  return (
    <div className='container'>
      <div className='py-12 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <h3 className='text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800'>
            Submit Your Order
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            {cart?.length ? (
              <Card className={classes.card}>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex items-center space-x-2'>
                      <TextField
                        id='select-transaction-method'
                        select
                        label='Transaction Method'
                        name='transactionMethod'
                        value={form.transactionMethod}
                        onChange={handleChange}
                        variant='outlined'
                        margin='dense'
                        fullWidth
                        helperText={
                          form.transactionReference && 'Payment accepted'
                        }
                      >
                        <MenuItem value=''>Select Method</MenuItem>
                        {['WALLET', 'CARD'].map((method, i) => (
                          <MenuItem key={i} value={method}>
                            {method}
                          </MenuItem>
                        ))}
                      </TextField>
                      {form.transactionMethod === 'CARD' &&
                        !form.transactionReference && (
                          <PaystackWizard
                            handleReferenceChange={handleReferenceChange}
                            amount={form.books.reduce(
                              (n, row) => n + row.amount,
                              0
                            )}
                          />
                        )}
                    </div>
                    <TextField
                      label='Custom Shipping Email'
                      name='customerShippingEmail'
                      value={form.customerShippingEmail}
                      onChange={handleChange}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                    />
                    <TextField
                      label='Customer Shipping Phone Number'
                      name='customerShippingPhoneNumber'
                      value={form.customerShippingPhoneNumber}
                      onChange={handleChange}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                    />

                    <Divider />

                    <TextField
                      id='select-nationality'
                      select
                      label='Select Nationality'
                      name='shippingCountryId'
                      value={form.shippingCountryId}
                      onChange={handleChange}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                    >
                      <MenuItem value=''>Select Nationality</MenuItem>
                      {countries.map((country, i) => (
                        <MenuItem key={i} value={country.id}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      id='select-state'
                      select
                      label='Select State'
                      name='shippingStateId'
                      value={form.shippingStateId}
                      onChange={handleChange}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                    >
                      <MenuItem value=''>Select State</MenuItem>
                      {states.map((state, i) => (
                        <MenuItem key={i} value={state.id}>
                          {state.name}
                        </MenuItem>
                      ))}
                    </TextField>

                    <div className='flex justify-between items-center space-x-4'>
                      <TextField
                        id='shipping-city'
                        label='Shipping City'
                        name='shippingCity'
                        value={form.shippingCity}
                        onChange={handleChange}
                        variant='outlined'
                        size='small'
                        fullWidth
                      />
                      <TextField
                        id='shipping-zipcode'
                        label='Shipping Zip Code'
                        name='shippingZipCode'
                        value={form.shippingZipCode}
                        onChange={handleChange}
                        variant='outlined'
                        size='small'
                        fullWidth
                      />
                    </div>

                    <FormControlLabel
                      control={
                        <Switch
                          checked={form.shipOrder}
                          onChange={handleChange}
                          name='shipOrder'
                        />
                      }
                      label='Ship Order'
                    />

                    <TextField
                      label='Shipping Address'
                      name='shippingAddress'
                      value={form.shippingAddress}
                      onChange={handleChange}
                      variant='outlined'
                      margin='dense'
                      fullWidth
                    />
                  </div>
                </CardContent>

                <CardActions>
                  <div className='flex items-center justify-between space-x-4 md:space-x-0'>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='large'
                      rounded
                      disabled={canSubmit()}
                      onClick={handleSubmit}
                    >
                      {loading ? 'Loading' : 'Order'}
                    </Button>
                  </div>
                </CardActions>
              </Card>
            ) : (
              <Alert severity='info'>
                <AlertTitle>Heads up!</AlertTitle>
                You currently have {cart.length} items in your cart —{' '}
                <strong>
                  select <a href='/books'>books</a> to buy here!
                </strong>
              </Alert>
            )}

            <div className='bg-gray-200'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
