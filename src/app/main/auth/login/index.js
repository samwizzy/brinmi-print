import React, { useState } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "./../../../auth/store/actions";
import { makeStyles } from "@material-ui/core/styles";
import {
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

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      border: console.log(theme, "theme"),
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
  const authProps = useSelector(({ auth }) => auth.login);
  const { data, loading } = authProps;
  const [userRole, setUserRole] = useState("AUTHOR");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ ...data });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(Actions.login(form));
  };

  return (
    <div className={clsx(classes.root, "container")}>
      <div className="py-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            Sign In
          </h3>
          <p className="text-lg leading-8 tracking-wide text-gray-600">
            As a User or an Author
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4">
              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  aria-label="role"
                  name="role"
                  value={userRole}
                  onChange={(event) => setUserRole(event.target.value)}
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
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton className="focus:outline-none">
                        <MailOutlineIcon />
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Password"
                  name="password"
                  variant="outlined"
                  type={isVisible ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        className="focus:outline-none"
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <VisibilityOutlinedIcon />
                        ) : (
                          <VisibilityOffOutlinedIcon />
                        )}
                      </IconButton>
                    ),
                  }}
                />

                <p className="text-base font-light text-right text-gray-600">
                  <Link to="/forgot-password">Forgetten Password?</Link>
                </p>
                <div className="flex items-center justify-between space-x-4 md:space-x-0">
                  <span>
                    Don't have an account?{" "}
                    <Link className="signup" to="/sign-up">
                      Sign Up
                    </Link>
                  </span>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    rounded
                    onClick={handleSubmit}
                  >
                    {loading ? "Loading..." : "Sign In"}
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
