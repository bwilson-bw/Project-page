import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppSidebar />
        <div className="AppContentWrapper">
          <div className="AppContentInnerWrapper" />
        </div>
      </div>
    );
  }
}

export default App;
