import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#0BA6CF",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function ImageDropzone(props) {
  const { form, handleImageUpload } = props;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    // acceptedFiles,
  } = useDropzone({
    accept: "image/*, *.pdf, *.doc",
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      handleImageUpload(files);
    },
  });

  const files = form.images.map((file, i) => (
    <li key={i}>
      <img
        src={`data:image/jpg;base64,${file.encodedString}`}
        alt=""
        className="h-40"
      />
    </li>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="flex flex-col space-y-4">
      <section className="container">
        <div {...getRootProps({ style })} className="space-y-2">
          <input {...getInputProps()} />
          <img
            className="h-10"
            src="/assets/icons/upload.svg"
            alt="upload-icon"
          />
          <p>
            <span className="text-green">Click here</span> to Upload Your Book
          </p>
          <span className="text-xs text-gray-600">PDF Format Only</span>
        </div>

        <aside>
          <ul className="flex py-4">{files}</ul>
        </aside>
      </section>
    </div>
  );
}

export default ImageDropzone;
