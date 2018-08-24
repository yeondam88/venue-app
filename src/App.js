import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";
import VenuInfo from "./components/venu_info";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", backgroundColor: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <VenuInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
