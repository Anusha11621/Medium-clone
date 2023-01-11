import React, { Component } from "react";
import "../../App.css";
export default class Settings extends Component {
  onlogout = () => {
    setTimeout(() => {
      localStorage.clear();
      window.location.reload();
      window.location.replace("/");
    }, 1000);
  };
  render() {
    return (
      <div className=" text-center" style={{ paddingTop: "100px" }}>
        <h2 className="text-secondary">Your Settings</h2>
        <input
          className="settings"
          placeholder="URL of Profile Picture"
        ></input>
        <br></br>
        <input className="settings" placeholder="Username"></input>
        <br></br>
        <textarea
          className="settings"
          rows={"8"}
          placeholder="Short Bio About You"
        ></textarea>
        <br></br>
        <input className="settings" placeholder="Email"></input>
        <br></br>
        <input className="settings" placeholder="New Password"></input>
        <br></br>
        <div>
          <button onClick={this.onlogout} className="btn btn-danger m-3">
            Log out
          </button>
          <button className="btn btn-success m-3">Update Settings</button>
        </div>
      </div>
    );
  }
}
