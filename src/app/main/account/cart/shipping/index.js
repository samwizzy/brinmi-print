import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Button } from "@brinmi";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    "& .MuiCardActions-root": {
      padding: theme.spacing(2),
    },
  },
}));

export default function ShoppingForm(props) {
  const classes = useStyles(props);
  const [form, setForm] = useState({
    nationality: "",
    state: "",
    city: "",
    address: "",
    lga: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="py-12 px-4 bg-green-dark">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-200">
            Shopping Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <Card className={classes.card}>
              <CardContent>
                <div className="space-y-4">
                  <TextField
                    id="select-nationality"
                    select
                    label="Select Nationality"
                    value={form.nationality}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  >
                    <MenuItem value="">Select Nationality</MenuItem>
                    {["Nigeria", "America"].map((country, i) => (
                      <MenuItem key={i} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </TextField>

                  <div className="flex justify-between items-center space-x-4">
                    <TextField
                      id="state"
                      label="State"
                      value={form.state}
                      onChange={handleChange}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />

                    <TextField
                      id="city"
                      label="City"
                      value={form.city}
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>

                  <TextField
                    label="Address"
                    value={form.address}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    label="Local Government"
                    value={form.lga}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    label="Phone Number"
                    value={form.phoneNumber}
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
