import React from "react";

import Main from "../components/Main";
import Slide from "../components/Slide";

export default class Home extends React.Component {
  render() {
    return (
      <div className="containert">
        <Main/>
        <Slide/>
      </div>
    );
  }
}
