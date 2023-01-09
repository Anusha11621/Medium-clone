import React, { Component } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
// import Multipleusers from './components/Multipleusers/Multipleusers'
import Singleuser from './components/Singleuser/Singleuser'
let url = 'https://api.realworld.io/api/articles'
let tagsurl = 'https://api.realworld.io/api/tags'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      signinemail :'',
      signinpassword:'',
      signupemail:'',
      signupusername:'',
      signuppassword:'',
      multiuser:null,
      tags:null,
      error:{
        signinemail :'',
        signinpassword:'',
        signupemail:'',
        signupusername:'',
        signuppassword:'',
      }
    }
  }
  valuesHandeler = (event)=>{
    let id = event.target.id
    let value = event.target.value
    switch (id) {
      case "signinemail":
        this.setState({
          signinemail:value
        })
      break;
      case "signinpassword":
        this.setState({
          signinpassword:value
        })
      break;
      case "signupemail":
        this.setState({
          signupemail:value
        })
      break;
      case "signuppassword":
        this.setState({
          signuppassword:value
        })
      break;
      case "signupusername":
        this.setState({
          signupusername:value
        })
      break;
      default:
        break;
    }
  }
  componentDidMount(){
      fetch(url)
          .then((res)=>{return res.json()})
          // .then((data)=>console.log(data))
          .then((data)=>{
            this.setState((prevState)=>{
              return{
                ...prevState,
                multiuser:data
              }
            })
      })
      fetch(tagsurl)
          .then((res)=>{return res.json()})
          // .then((data)=>console.log(data))
          .then((data)=>{
            this.setState((prevState)=>{
              return{
                ...prevState,
                tags:data
              }
            })
      })
  }
  errorHandeler = (id,message)=>{
    this.setState((prevState)=>{
      prevState.error[id]= message
      return prevState
    })
  }
  render() {
    // console.log(this.state);
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' match element={<Home data={this.state} />}></Route>
        <Route path='/article/:slug' element={<Singleuser data={this.state} />}></Route>
        <Route path='/signin' element={<Signin  data={this.state} listener={this.valuesHandeler} error = {this.errorHandeler}/>}></Route>
        <Route path='/signup' element={<Signup data={this.state} listener={this.valuesHandeler} error = {this.errorHandeler}/>}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}
