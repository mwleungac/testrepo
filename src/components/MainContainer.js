import React, { Component } from "react";
import Banner from "./Banner";
import ParkingLotList from "./ParkingLotList";
import { Divider } from "antd";

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Banner />
        <Divider className="divider" />
        <ParkingLotList />
      </div>
    );
  }
}

export default MainContainer;
