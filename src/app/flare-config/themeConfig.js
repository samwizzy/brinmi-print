import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: {
        light: "#636398",
        main: "#3D3C7F",
        dark: "#2a2a58",
      },
      secondary: {
        light: "#a3d199",
        main: "#8DC680",
        dark: "#628a59",
        contrastText: "#fff",
      },
      error: {
        main: red[800],
      },
    },
    status: {
      danger: red[500],
    },
    overrides: {
      MuiButton: {
        label: {},
      },
    },
  },
};

export default createMuiTheme(themesConfig.default);
