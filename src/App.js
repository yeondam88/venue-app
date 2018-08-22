import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", backgroundColor: "cornflowerblue" }}
      >
        <Header />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default App;
