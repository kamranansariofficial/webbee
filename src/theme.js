import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#009357",
    },
    secondary: {
      main: "#272d59",
    },
    error: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    button: {
      fontFamily: ["Roboto", "DroidKufi-Regular"].join(","),
    },
  },
});

export default theme;
