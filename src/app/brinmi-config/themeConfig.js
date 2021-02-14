import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: {
        light: "#4695ac",
        main: "#187B98",
        dark: "#10566a",
      },
      secondary: {
        light: "#9ac876",
        main: "#81BB54",
        dark: "#5a823a",
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
