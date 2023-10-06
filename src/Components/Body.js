import React from "react";
import '../css/body.css';
import Display from "./Screen/Display";
import Wheel from "./Controller/Wheel";
class Body extends React.Component {
  render() {
    return (
      <div class="body">
        <Display/>
        <Wheel/>
      </div>
    );
  }
}
export default Body;