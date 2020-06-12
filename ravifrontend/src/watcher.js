import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import "./watcher.css";
export default class watcher extends Component {
  constructor() {
    super();
    this.state = {
      tapOne: null,
      tapTwo: null,
      tapThree: null,
      tapFour: null,
      tapFive: null,
      endpoint: "http://localhost:3000"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("tapOne", data => {
      console.log(data);
      this.setState({ tapOne: data });
    });
    socket.on("tapTwo", data => {
      this.setState({ tapTwo: data });
    });
    socket.on("tapThree", data => {
      this.setState({ tapThree: data });
    });
    socket.on("tapFour", data => {
      this.setState({ tapFour: data });
    });
    socket.on("tapFive", data => {
      this.setState({ tapFive: data });
    });
  }
  render() {
    console.log(this.state);
    let { tapOne, tapTwo, tapThree, tapFour, tapFive } = this.state;
    return (
      <div className={"boardWrapper"}>
          <TapInfo tap = {tapOne} />
          <TapInfo tap = {tapTwo} />
          <TapInfo tap = {tapThree} />
          <TapInfo tap = {tapFour} />
          <TapInfo tap = {tapFive} />
        {/* <div className={"tap"}>
        </div>
        <div className={"tap"}>
        </div>
        <div className={"tap"}>
        </div>
        <div className={"tap"}>
        </div>
        <div className={"tap"}>
        </div> */}
      </div>
    );
  }
}

function TapInfo ({tap}) {
  return  tap &&
    tap.result.map(data =>(
        <div>
          <div className="tikerWrapper">
            <p>
              <span>{tap.tap} </span>
              {data.tiker}
            </p>
            <p>{data.changePercent}</p>
            <p>{data.latestPrice}</p>
          </div>
          {data.marketStatus.length > 0 && (
            <div className="marketWatchWrapper">
              <p>O {data.marketStatus[1]}</p>
              <p>H {data.marketStatus[3]}</p>
              <p>L {data.marketStatus[5]}</p>
              <p>C {data.marketStatus[7]}</p>
            </div>
          )}
        </div>
      ))};

