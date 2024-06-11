import { createTheme } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[300],
    },
    warning: {
      main: red[500],
      dark: red[900],
    },
  },
});
