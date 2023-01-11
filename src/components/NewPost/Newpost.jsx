import React, { Component } from "react";
import "../../App.css";
let createArticle = "https://api.realworld.io/api/articles";
export default class Newpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  validation = () => {
    let temp = true;

    if (this.props.data.title == "") {
      this.props.error("title", "*Title should not be empty");
      temp = false;
    } else {
      this.props.error("title", "");
    }

    if (this.props.data.description == "") {
      this.props.error("description", "*Description should not be empty");
      temp = false;
    } else {
      this.props.error("description", "");
    }
    if (this.props.data.body == "") {
      this.props.error("body", "*Body should not be empty");
      temp = false;
    } else {
      this.props.error("body", "");
    }
    return temp;
  };

  postrequest = () => {
    const title = this.props.data.title;
    const description = this.props.data.description;
    const body = this.props.data.body;
    const tagList = this.props.data.tagList;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("app__user"),
      },
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList,
        },
      }),
    };
    fetch(createArticle, options)
    // console.log(localStorage.getItem("app__user"));
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(localStorage.getItem("app__user")));
  };
  submitHandeler = (e) => {
    e.preventDefault();
    // if (this.validation()) {
      this.postrequest();
    // }
  };
  render() {
    console.log(this.state);
    // console.log(localStorage.getItem("app__user"));
    return (
      <div>
        <form>
          <div className=" text-center" style={{ paddingTop: "100px" }}>
            <input
              id="title"
              className="settings"
              placeholder="Article Title"
              onChange={this.handelinput}
              value={this.state.title}
            ></input>
            <p className="text-danger">
              <b>{this.props.data.error.title}</b> 
            </p>

            <input
              id="description"
              className="settings"
              placeholder="What's this article about?"
              onChange={this.handelinput}
              value={this.state.description}
            ></input>
            <p className="text-danger">
              <b>{this.props.data.error.description}</b>
            </p>

            <textarea
              id="body"
              className="settings"
              rows={"8"}
              placeholder="Write Your Article"
              onChange={this.handelinput}
              value={this.state.body}
            ></textarea>
            <p className="text-danger">
              <b>{this.props.data.error.body}</b>
            </p>

            <input
              id="tagList"
              className="settings"
              placeholder="Tags"
              onChange={this.handelinput}
              value={this.state.tags}
            ></input>

            <div>
              <button
                className="btn btn-success m-3"
                onClick={this.submitHandeler}
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
