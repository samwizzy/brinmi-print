import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, TextField } from "@material-ui/core";
import { Button, BrinmiUtils } from "@brinmi";
import DocDropzone from "./components/DocDropzone";
import ImageDropzone from "./components/ImageDropzone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFormControl-root": {
      "& .MuiInputBase-input": { backgroundColor: "#ffffff" },
      "& fieldset": { border: 0 },
    },
  },
}));

export default function BookUpload(props) {
  const classes = useStyles(props);
  const [form, setForm] = useState({
    title: "",
    name: "",
    category: "",
    price: "",
    bookCategory: "",
    description: "",
    images: [],
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleImageUpload = (files) => {
    let images = [];
    files.map((file) => {
      return BrinmiUtils.toBase64(file).then((data) => {
        images.push({
          encodedString: data,
          extension: file.type.split("/")[1],
        });
      });
    });

    setForm({ ...form, images });
  };

  return (
    <div className={classes.root}>
      <div className="py-12 px-4 bg-gray-100">
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
                  id="author-name"
                  name="name"
                  label="Enter Author's Name"
                  value={form.name}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />

                <TextField
                  id="select-category"
                  name="category"
                  select
                  label="Category"
                  value={form.category}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                >
                  <MenuItem value="">Select Category</MenuItem>
                  {["Free", "Basic"].map((category, i) => (
                    <MenuItem key={i} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="select-book-category"
                  name="bookCategory"
                  select
                  label="Book Category"
                  value={form.bookCategory}
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                >
                  <MenuItem value="">Select Book Category</MenuItem>
                  {["Health", "Family", "Children"].map((category, i) => (
                    <MenuItem key={i} value={category}>
                      {category}
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
                />
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
                >
                  Upload
                </Button>
              </div>
            </div>
            <div className="bg-white col-span-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
