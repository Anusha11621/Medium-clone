import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Singleuser from "./components/Singleuser/Singleuser";
import Newpost from "./components/NewPost/Newpost";
import Settings from "./components/Settings/Settings";
import Loading from "./components/Loading";
import Error from "./components/Error/Error";
import Profile from "./components/Profile/Profile";
import Comments from "./components/Comments/Comments";
import EditArticle from "./components/EditArticle/EditArticle";
let url = "https://api.realworld.io/api/articles";
let tagsurl = "https://api.realworld.io/api/tags";
let usersurl = "https://api.realworld.io/api/user";
let localStorageKey = "app__user";
let localStorageuser = "article__user" 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinemail: "",
      signinpassword: "",
      signupemail: "",
      signupusername: "",
      signuppassword: "",
      title: "",
      description: "",
      body: "",
      tagList: "",
      multiuser: null,
      tags: null,
      isLogIn: false,
      user: null,
      articledata: null,
      isVerified: true,
      error: {
        signinemail: "",
        signinpassword: "",
        signupemail: "",
        signupusername: "",
        signuppassword: "",
        title: "",
        description: "",
        body: "",
        tagList: "",
      },
    };
  }
  valuesHandeler = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    switch (id) {
      case "signinemail":
        this.setState({
          signinemail: value,
        });
        break;
      case "signinpassword":
        this.setState({
          signinpassword: value,
        });
        break;
      case "signupemail":
        this.setState({
          signupemail: value,
        });
        break;
      case "signuppassword":
        this.setState({
          signuppassword: value,
        });
        break;
      case "signupusername":
        this.setState({
          signupusername: value,
        });
        break;
      case "title":
        this.setState({
          title: value,
        });
        break;
      case "description":
        this.setState({
          description: value,
        });
        break;
      case "body":
        this.setState({
          body: value,
        });
        break;
      case "tagList":
        this.setState({
          tagList: value,
        });
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      // .then((data)=>console.log(data))
      .then((data) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            multiuser: data,
          };
        });
      });
    fetch(tagsurl)
      .then((res) => {
        return res.json();
      })
      // .then((data)=>console.log(data))
      .then((data) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            tags: data,
          };
        });
      });
    if (localStorage[localStorageKey]) {
      this.setState({
        isLogIn: true,
      });
    }
  }
  errorHandeler = (id, message) => {
    this.setState((prevState) => {
      prevState.error[id] = message;
      return prevState;
    });
  };
  updatedUser = (user) => {
    this.setState({ isLogIn: true, user: user, isVerified: false });
    localStorage.setItem(localStorageKey, user.token);
    localStorage.setItem('user_name',user.username)
    localStorage.setItem(localStorageuser,JSON.stringify(user))
  };
  updatedarticledata = (articledata) => {
    this.setState({ isLogIn: true, articledata: articledata, isVerified: false });
    // localStorage.setItem(localStorageKey, user.token);
  };
  render() {
    // console.log(this.state.user);
    // console.log(localStorage.getItem("article__user"))
    if (!this.state.isVerified) {
      return <Loading></Loading>;
    } else {
      if (this.state.isLogIn === true) {
        return (
          <BrowserRouter>
            <Header updateedUser={this.updatedUser} data={this.state} />
            <Routes>
              <Route
                path="/"
                match
                element={<Home data={this.state} />}
              ></Route>
              <Route
                path="/article/:slug"
                element={<Singleuser data={this.state} />}
              ></Route>
              <Route
                path="/editor"
                element={
                  <Newpost
                    data={this.state}
                    listener={this.valuesHandeler}
                    error={this.errorHandeler}
                    updatedata = {this.updatedarticledata}
                  ></Newpost>
                }
              ></Route>
              <Route path="/settings" element={<Settings></Settings>}></Route>
              <Route path="/profile" element={<Profile data={this.state}></Profile>}></Route>
              <Route path="/edit/:slug" element={<EditArticle></EditArticle>}></Route>
              <Route path="/comments" element={<Comments data={this.state}></Comments>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>
          </BrowserRouter>
        );
      } 
      else {
        return (
          <BrowserRouter>
            <Header updateedUser={this.updatedUser} data={this.state} />
            <Routes>
              <Route
                path="/"
                match
                element={<Home data={this.state} />}
              ></Route>
              <Route
                path="/article/:slug"
                element={<Singleuser data={this.state} />}
              ></Route>
              <Route
                path="/signin"
                element={
                  <Signin
                    data={this.state}
                    listener={this.valuesHandeler}
                    error={this.errorHandeler}
                    updatedUser={this.updatedUser}
                  />
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <Signup
                    data={this.state}
                    listener={this.valuesHandeler}
                    error={this.errorHandeler}
                    updatedUser={this.updatedUser}
                  />
                }
              ></Route>
              <Route
                path="/editor"
                element={<Signin
                  data={this.state}
                  listener={this.valuesHandeler}
                  error={this.errorHandeler}
                  updatedUser={this.updatedUser}
                />}
              ></Route>
              <Route
                path="/settings"
                element={<Signin
                  data={this.state}
                  listener={this.valuesHandeler}
                  error={this.errorHandeler}
                  updatedUser={this.updatedUser}
                />}
              ></Route>
              <Route path="*" element={<Error></Error>}></Route>
              <Route path="/comments" element={<Comments data={this.state}></Comments>}></Route>
            </Routes>
          </BrowserRouter>
        );
      }
    }
  }
}
