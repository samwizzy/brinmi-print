import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import * as authActions from "./../../../auth/store/actions";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  CircularProgress,
  Icon,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Button } from "./../../../../@flare";

const qualifications = [
  { name: "General Certificate of Education (GCE)" },
  { name: "Ordinary National Diploma (OND)" },
  { name: "Higher National Diploma (HND)" },
  { name: "Bachelor of Arts (BA)" },
  { name: "Bachelor of Architecture (B.Arch)" },
  { name: "Bachelor of Business Administration (B.B.A)" },
  { name: "Bachelor of Education (B.Ed)" },
  { name: "Barchelor of Engineering (B.Eng)" },
  { name: "Bachelor of Nursing (B.N)" },
  { name: "Bachelor of Law (LLB (Hons)/B.L)" },
  { name: "Post Graduate Diploma (PGD)" },
  { name: "Post Graduate Diploma in Education (PGDE)" },
  { name: "Master of Arts (M.A)" },
  { name: "Master of Architecture (M.Arch)" },
  { name: "Master of Biochemistry (M.Biochem)" },
  { name: "Master of Biomedical Sciences (M.BioSci)" },
  { name: "Master of Education (M.Ed)" },
  { name: "Master of Engineering (M.Eng)" },
  { name: "Master of Languages (M.Lang)" },
  { name: "Master of Physics (M.Phys)" },
  { name: "Master of Science (M.Sc)" },
  { name: "Doctor of Philosophy (PH.D)" },
];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  education: "",
  address: "",
  businessName: "",
  businessLocation: "",
  coverageArea: "",
  dateOfBirth: "1980-01-01",
  skillSet: "",
  careerInterest: "",
};

export default function RegisterForm(props) {
  const dispatch = useDispatch();
  const loading = useSelector(({ auth }) => auth.register.loading);
  const [form, setForm] = useState({ ...initialState });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleDateChange = (name) => (date) => {
    setForm({ ...form, [name]: moment(date).format("YYYY-MM-DD") });
  };

  const handleSubmit = () => {
    dispatch(authActions.register(form));
    setForm({ ...initialState });
  };

  const canSubmit = () => {
    const {
      fullName,
      email,
      phone,
      education,
      address,
      businessName,
      businessLocation,
      coverageArea,
    } = form;
    return (
      fullName &&
      email &&
      phone &&
      education &&
      address &&
      businessName &&
      businessLocation &&
      coverageArea
    );
  };

  console.log(form, "form");
  console.log(loading, "loading");

  return (
    <div>
      <h2 className="text-2x1 text-gray-700 tracking-tight font-light mb-2">
        Register As A Consultant
        <Tooltip title="Register with flare and be part of our ongoing programs">
          <IconButton size="small">
            <Icon fontSize="small">info</Icon>
          </IconButton>
        </Tooltip>
      </h2>
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextField
                  label="Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextField
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <TextField
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextField
                  select
                  label="Education Qualification"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="">Select your qualification</MenuItem>
                  {qualifications.map((q, i) => (
                    <MenuItem key={i} value={q.name}>
                      {q.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    autoOk
                    format="dd MMMM yyyy"
                    minDate="1980-01-01"
                    id="date-of-birth"
                    label="Date of Birth"
                    onChange={handleDateChange("dateOfBirth")}
                    value={form.dateOfBirth}
                    variant="inline"
                    inputVariant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </MuiPickersUtilsProvider>
              </div>

              <div className="col-span-6">
                <TextField
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                <TextField
                  label="Business name"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                <TextField
                  label="Business location"
                  name="businessLocation"
                  value={form.businessLocation}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                <TextField
                  label="Coverage area"
                  name="coverageArea"
                  value={form.coverageArea}
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 px-4 py-3 bg-gray-50 text-right sm:px-6">
            {loading && (
              <div className="text-xs text-gray-500">
                Hang on, we are collecting your data{" "}
                <CircularProgress size={10} />
              </div>
            )}
            <Button
              color="secondary"
              variant="contained"
              disableElevation
              disabled={!canSubmit()}
              onClick={handleSubmit}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
