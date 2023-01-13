import React, { Component } from "react";
import Multipleusers from "../Multipleusers/Multipleusers";
import PrivateHome from "../PrivateHome/PrivateHome";
import "../../App.css";
import { Link } from "react-router-dom";
// let url = 'https://api.realworld.io/api/articles'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount(){
  //   this.props.fetchingdata(url)
  // }
  render() {
    // console.log(this.props.data);
    if (this.props.data.isLogIn) {
      return (
        <div className="multiuser container">
          <div class="tabs">
            <input type="radio" name="tabs" id="tabone" checked="checked"/>
            <label for="tabone">Your Feed</label>
            <div class="tab pl-2">
        
        <PrivateHome></PrivateHome>
        </div>
      
        <input type="radio" name="tabs" id="tabtwo"/>
        <label for="tabtwo">Global feed</label>
        <div class="tab">
          <Multipleusers data={this.props.data} />
        </div>
    </div>

        </div>
      );
    } else if (!this.props.data.isLogIn) {
      return (
        <div className="mt-3  ">
          <div className="h-75 bg-warning p-5 text-center ">
            <h1 className="display-1 pt-5 pl-5">Stay curious.</h1>
            <h4 className="display-6 pl-5">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h4>
            <br></br>
            <Link className="link" to='/signup'><button className="btn btn-dark "> Get Started</button></Link>
          </div>
          <br></br>

          
          <Multipleusers data={this.props.data} />
        </div>
      );
    }
  }
}
