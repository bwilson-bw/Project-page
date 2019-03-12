import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0097a7"
    },
    type: "dark"
  },
  action: {
    hoverOpacity: 1
  }
});

export default class AppProvider extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    );
  }
}
