import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  colors,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Button } from "@brinmi";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      textDecoration: "none",
      color: theme.palette.grey[600],
      "&.signup": {
        color: colors.yellow[700],
        "&:hover": {
          color: colors.yellow[800],
        },
      },
      "&:hover": {
        color: theme.palette.secondary.dark,
      },
    },
  },
}));

export default function Login(props) {
  const classes = useStyles(props);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    termsConditions: false,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className={clsx(classes.root, "container")}>
      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            Sign Up
          </h3>
          <p className="text-lg md:text-xl leading-8 tracking-tight text-gray-600">
            As a User or an Author
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4">
              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  aria-label="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="USER"
                    control={<Radio />}
                    label="User"
                  />
                  <FormControlLabel
                    value="AUTHOR"
                    control={<Radio />}
                    label="Author"
                  />
                </RadioGroup>
              </FormControl>
              <div className="space-y-8">
                <TextField
                  label="Enter Fullname"
                  variant="outlined"
                  value={form.fullName}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <PersonOutlineIcon />
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Email"
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <MailOutlineIcon />
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Password"
                  variant="outlined"
                  type={isVisible ? "text" : "password"}
                  value={form.password}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type={isVisible ? "text" : "password"}
                  value={form.password}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    ),
                  }}
                />

                <div className="flex items-center justify-between space-x-4 md:space-x-0">
                  <span>
                    Already have an account?{" "}
                    <Link className="signup" to="/sign-up">
                      Sign In
                    </Link>
                  </span>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    rounded
                  >
                    Sign Up
                  </Button>
                </div>
                <p className="text-base font-light text-right text-gray-600">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.termsConditions}
                        onChange={handleChange}
                        name="termsConditions"
                      />
                    }
                    label={
                      <span>
                        I agree to the{" "}
                        <Link to="/terms-conditions">terms and conditions</Link>
                      </span>
                    }
                  />
                </p>
              </div>
            </div>
            <div className="bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
