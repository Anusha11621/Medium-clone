import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="p-5 m-5 d-flex justify-content-center gap-3">
        {/* <h3 className='pt-5 mt-3'>Loading....</h3> */}
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">L</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">o</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">a</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">d</span>
        </div>
      </div>
    );
  }
}
