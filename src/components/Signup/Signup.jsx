import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import {withRouter} from 'react-router'
export default class Signup extends Component {
constructor(props){
    super(props)
    this.state = {
        error:null,
    }
}
posturl = ()=>{
    const email = this.props.data.signupemail
    const password = this.props.data.signuppassword
    const username = this.props.data.signupusername
    const signupurl = 'https://api.realworld.io/api/users'
    const options = {
         method : 'POST',
         headers: {
            'Content-Type': 'application/json'
          },
         body :  JSON.stringify({
            user:{
                username,
                email,
                password,    
            }
         })
    }
    fetch(signupurl,options)
    .then((res)=>{
        if(!res.ok){
            res.json().then((error)=>{
                return this.setState({
                    error:error
                })
            })
        }
        else{
            res.json().then((succ)=>{
                this.props.updatedUser(succ.user)
                window.location.replace('/');
                console.log(succ.user);

            })
        }
    })
}
validation =()=>{
    let temp = true
 
    if(this.props.data.signupemail == ''){
        this.props.error('signupemail','*Email should not be empty')
        temp = false
    }
    else if(!this.props.data.signupemail.includes('@')  || !this.props.data.signupemail.includes('.')){
        this.props.error('signupemail','*INVALID EMAIL')
        temp = false
    }
    else{
        this.props.error('signupemail','')
    }
    
    if(this.props.data.signuppassword == ''){
        this.props.error('signuppassword','*Password should not be empty')
        temp = false
    }
    else if(this.props.data.signuppassword.length <= 6){
        this.props.error('signuppassword','*Password should be at-least 6 characters')
        temp = false
    }
    else{
        this.props.error('signuppassword','')
    }
    if(this.props.data.signupusername== ""){
      this.props.error('signupusername','*Username should not be empty')
        temp = false
    }
    else{
      this.props.error('signupusername','')
  }
    return temp
}
onsubmit = async(e)=>{
    e.preventDefault()
    if(this.validation()){
        this.posturl()
    }
}
error = ()=>{
    if(this.state.error){
    // console.log(this.state.error.errors);
    // return <p>{this.state.error.errors.email}</p>
    if(this.state.error.errors.email &&this.state.error.errors.username){
        return <p className='text-center text-danger'>*Email and username {this.state.error.errors.email}</p>
    }
    else if(this.state.error.errors.username){
        return <p  className='text-center text-danger'>Username {this.state.error.errors.username}</p>
    }
    else if(this.state.error.errors.email){
        return <p className='text-center text-danger'>Email {this.state.error.errors.email}</p>
    }
    else{
        return <p></p>
    }
    }
}
  render() {
    console.log(this.state);
    
    return (
      <div className='p-5'>
        <form className='d-flex flex-column align-items-center mt-5'>
            <h1>Sign Up</h1>
            <Link className='text-success' to='/signin'><p>Have an Account?</p></Link>
            <br></br>
            {this.error()}
            <input id='signupusername' type={'text'} placeholder='Username' className='p-3' onChange={this.props.listener} ></input>
            <p className='text-danger'><b>{this.props.data.error.signupusername}</b></p>
                <br></br>
            <input id='signupemail' type={'email'} placeholder='Email' className='p-3' onChange={this.props.listener} ></input>
            <p className='text-danger'><b>{this.props.data.error.signupemail}</b></p>
                <br></br>
            <input id='signuppassword' type={'password'} placeholder='Password' className='p-3' onChange={this.props.listener}></input>
            <p className='text-danger'><b>{this.props.data.error.signuppassword}</b></p>
            
            <button  type ='submit'className='btn btn-success d-flex' onClick={this.onsubmit}>Sign Up</button>
        </form>
      </div>
    )
  }
}