import React, { Component } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      signinemail :'',
      signinpassword:'',
      error:{
        signinemail :'',
        signinpassword:'',
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
      default:
        break;
    }
  }

  errorHandeler = (id,message)=>{
    this.setState((prevState)=>{
      prevState.error[id]= message
      return prevState
    })
  }
  render() {
    console.log(this.state);
    return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin  data={this.state} listener={this.valuesHandeler} error = {this.errorHandeler}/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    )
  }
}
