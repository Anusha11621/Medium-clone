import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import "../../App.css";
let localStorageuser = "article__user"
export default class Settings extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      email:'',
      bio:'',
      password:'',
      image:'',   
  }
  }
  handleInput = (event) => {
    const{id,value} = event.target
       switch (id) {
           case 'username':
              this.setState({username:value})
               break;
           case 'email':
               this.setState({email:value})
               break
           case 'password':
               this.setState({password:value})
               break;
            case 'image':
                this.setState({image:value})
                break;
            case 'bio':
                this.setState({bio:value})
                break;
           default:
               break;
       }
   }
   componentDidMount(){
    fetch(`https://api.realworld.io/api/user`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        authorization: `Token ${localStorage.getItem("app__user")}`,
      }})
    .then((res) => res.json())
    .then((user) => this.setState({
        email:user.user.email,
        bio:user.user.bio,
        image:user.user.image,
        username:user.user.username
    }))
}
   handleUpdateProfile =  (event) => {
    event.preventDefault();
    const user = {
        user:{
            image:this.state.image,
            bio:this.state.bio,
            email:this.state.email, 
        }
    }
    console.log(user);
 fetch(`https://api.realworld.io/api/user`,{
  method:'PUT',
  headers:{
    'Content-Type':'application/json',
    authorization: `Token ${localStorage.getItem("app__user")}`,
  },    body:JSON.stringify(user)})
    .then((res) => res.json())
    .then((user) =>this.setState({
      bio:user.user.bio,
      image:user.user.image,
      email:this.state.email,
    }))
    localStorage.setItem(localStorageuser,JSON.stringify(user.user))
    localStorage.setItem("username",JSON.stringify(this.state.username))
    
    
}
  onlogout = () => {
      localStorage.clear();
      // window.location.replace("/");
      // <Navigate to="/" replace={true} />
      Navigate('/')
    
  };
  render() {
    console.log(this.state);
    return (
      <form className=" text-center" style={{ paddingTop: "100px" }}>
        <h2 className="text-secondary">Your Settings</h2>
        <input
          onChange={this.handleInput}
          className="settings"
          id = 'image'
          placeholder="URL of Profile Picture"
          value={this.state.image}
        ></input>
        <br></br>
        <input className="settings" id = 'username' readOnly placeholder="Username" onChange={this.handleInput} value={this.state.username}></input>
        <br></br>
        <textarea
          className="settings"
          rows={"8"}
          id = 'bio'
          placeholder="Short Bio About You"
          onChange={this.handleInput}
          value = {this.state.bio}
        ></textarea>
        <br></br>
        <input className="settings" id = 'email' readOnly placeholder="Email" onChange={this.handleInput} value={this.state.email}></input>
        <br></br>
        <input className="settings" id="password" placeholder="New Password" onChange={this.handleInput}></input>
        <br></br>
        <div>
          <button onClick={this.onlogout} className="btn btn-danger m-3">
            Log out
          </button>
          <button type="submit" onClick={this.handleUpdateProfile} className="btn btn-success m-3">Update Settings</button>
        </div>
      </form>
    );
  }
}
