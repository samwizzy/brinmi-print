import React, { useState, useEffect } from "react";
import withReducer from "app/store/withReducer";
import { useSelector, useDispatch, connect } from "react-redux";
import moment from "moment";
import reducer from "./../../store/reducers";
import * as Actions from "./../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, MenuItem, TextField } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Autocomplete } from "@material-ui/lab";
import { Button, BrinmiUtils } from "@brinmi";
import DocDropzone from "./components/DocDropzone";
import ImageDropzone from "./components/ImageDropzone";
import PaystackWizard from "./../components/PaystackWizard";
import _ from "lodash";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFormControl-root": {
      // "& .MuiInputBase-input": { backgroundColor: "#ffffff" },
      "& fieldset": { border: `1px solid ${theme.palette.secondary.light}` },
    },
  },
}));

const initialForm = {
  amountPaid: 2000,
  bookAuthors: [],
  bookCategoryId: "",
  datePublished: "2021-03-26T19:52:42.917Z",
  description: "",
  imageCover: "",
  isbn: "",
  price: 0,
  publisherAddress: "",
  publisherName: "",
  subscriptionPackage: "",
  summary: "",
  title: "",
  transactionMethod: "",
  transactionReference: "",
};

function BookUpload(props) {
  const classes = useStyles(props);
  const { accounts } = props;
  const dispatch = useDispatch();
  const categories = useSelector(({ books }) => books.category.categories);
  const [form, setForm] = useState({ ...initialForm });

  useEffect(() => {
    dispatch(Actions.getUsersByRole("USER"));
    return () => {};
  }, [dispatch]);

  const handleChange = (event) => {
    const numInputs = ["amountPaid", "price"];
    setForm({
      ...form,
      [event.target.name]: numInputs.includes(event.target.name)
        ? Number(event.target.value.replace(/[^0-9.]/g, ""))
        : // ? Number(event.target.value)
          event.target.value,
    });
  };

  const handleSelectChange = (name) => (event, value) => {
    setForm({ ...form, [name]: value.map((v) => v.id) });
  };

  const handleDateChange = (name) => (value) => {
    setForm({
      ...form,
      [name]: moment(value).format("YYYY-MM-DDTHH:mm:ss.SSS"),
    });
  };

  const handleReferenceChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(Actions.uploadBook(form));
  };

  const handleImageUpload = (files) => {
    files.map((file) => {
      return BrinmiUtils.toBase64(file).then((data) => {
        let imageCover = data;
        setForm({ ...form, imageCover });
      });
    });
  };

  const canSubmit = () => {
    return _.some(form, _.isEmpty);
  };

  console.log(accounts, "accounts");
  console.log(categories, "categories");
  console.log(form, "form");
  console.log(_.some({ name: "" }, _.isEmpty), "canSubmit()");

  return (
    <div className={classes.root}>
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl leading-8 tracking-tight font-extrabold text-gray-800">
            Book Upload
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-4">
            <div className="col-span-2">
              <DocDropzone form={form} handleImageUpload={handleImageUpload} />
              <ImageDropzone
                form={form}
                handleImageUpload={handleImageUpload}
              />
              <div className="space-y-4">
                <TextField
                  id="title"
                  name="title"
                  label="Title of the Book"
                  value={form.title}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />

                <TextField
                  id="summary"
                  name="summary"
                  label="Book summary"
                  value={form.summary}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />

                <div className="flex items-center space-x-4">
                  <TextField
                    id="amount-paid"
                    name="amountPaid"
                    label="Amount Paid"
                    value={form.amountPaid}
                    disabled
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />

                  <TextField
                    id="price"
                    name="price"
                    label="Book price"
                    value={form.price}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </div>

                <TextField
                  id="isbn"
                  name="isbn"
                  label="ISBN"
                  value={form.isbn}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />

                <Autocomplete
                  id="select-authors"
                  multiple
                  getOptionLabel={(option) => option.email}
                  value={accounts.filter((acc) =>
                    form.bookAuthors.includes(acc.id)
                  )}
                  onChange={handleSelectChange("bookAuthors")}
                  options={accounts}
                  renderOption={(option, { selected }) => (
                    <React.Fragment>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.email}
                    </React.Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Authors"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  )}
                />

                <TextField
                  id="select-category"
                  name="bookCategoryId"
                  select
                  label="Category"
                  value={form.bookCategoryId}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                >
                  <MenuItem value="">Select Category</MenuItem>
                  {categories.map((category, i) => (
                    <MenuItem key={i} value={category.id}>
                      {category.title}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="description"
                  label="Description"
                  name="description"
                  value={form.description}
                  variant="outlined"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                  multiline
                  rows={3}
                  rowsMax={4}
                />

                <TextField
                  id="publisher-name"
                  label="Publisher Name"
                  name="publisherName"
                  value={form.publisherName}
                  variant="outlined"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                />

                <TextField
                  id="publisher-address"
                  label="Publisher Address"
                  name="publisherAddress"
                  value={form.publisherAddress}
                  variant="outlined"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    autoOk
                    format="dd MMMM yyyy"
                    minDate="1980-01-01"
                    id="date-published"
                    label="Date Published"
                    onChange={handleDateChange("datePublished")}
                    value={form.datePublished}
                    variant="inline"
                    inputVariant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </MuiPickersUtilsProvider>

                <div className="flex items-center space-x-4">
                  <TextField
                    id="transaction-method"
                    select
                    label="Transaction Method"
                    name="transactionMethod"
                    value={form.transactionMethod}
                    variant="outlined"
                    onChange={handleChange}
                    margin="dense"
                    fullWidth
                    helperText={form.transactionReference && "Paid"}
                  >
                    <MenuItem value="">Select Transaction Method</MenuItem>
                    {["WALLET", "CARD"].map((trans, i) => (
                      <MenuItem key={i} value={trans}>
                        {trans}
                      </MenuItem>
                    ))}
                  </TextField>
                  {form.transactionMethod === "CARD" && (
                    <PaystackWizard
                      handleReferenceChange={handleReferenceChange}
                    />
                  )}
                </div>

                <TextField
                  id="subscription-package"
                  select
                  label="Subscription Package"
                  name="subscriptionPackage"
                  value={form.subscriptionPackage}
                  variant="outlined"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                >
                  <MenuItem value="">Select Subscription Package</MenuItem>
                  {["BASIC", "PREMIUM"].map((sub, i) => (
                    <MenuItem key={i} value={sub}>
                      {sub}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="mt-4 text-right md:text-center">
                <p className="text-yellow-500 text-xs mb-4">
                  To publish on our app as an author, a non-refundable fee of
                  NGN2,000 is required and the fee is subject to yearly renewal.
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  rounded
                  disabled={canSubmit()}
                  onClick={handleSubmit}
                >
                  Upload
                </Button>
              </div>
            </div>
            <div className="bg-gray-200 col-span-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ uploadReducer }) => {
  return {
    accounts: uploadReducer.account.accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withReducer(
  "uploadReducer",
  reducer
)(connect(mapStateToProps, mapDispatchToProps)(BookUpload));
