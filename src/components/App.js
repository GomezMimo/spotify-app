//Dependencies
import React, {Component} from "react";
import Navbar from "./Navbar";
import Login from "./Login";

export default class App extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="container">
        <Navbar />
        {children}
      </div>
    );
  }
}
