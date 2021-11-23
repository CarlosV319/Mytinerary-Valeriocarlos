import React from "react";
import Main from "../components/Main";
import Prueba from "../components/Prueba";

export default class Home extends React.Component {
  render() {
    return (
      <div className="containert">
        <Main />
        <Prueba />
      </div>
    );
  }
}
