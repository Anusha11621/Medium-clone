import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import login from '../../assets/Login.gif'
// import {withRouter} from 'react-router-dom'
class Signin extends Component {
constructor(props){
    super(props)
    this.state = {
        error:null
    }
}
validation =()=>{
    let temp = true
    if(this.props.data.signinemail == ''){
        this.props.error('signinemail','*Email should not be empty')
        temp = false
    }
    else if(!this.props.data.signinemail.includes('@')  || !this.props.data.signinemail.includes('.')){
        this.props.error('signinemail','*INVALID EMAIL')
        temp = false
    }
    else{
        this.props.error('signinemail','')
    }
    
    if(this.props.data.signinpassword == ''){
        this.props.error('signinpassword','*Password should not be empty')
        temp = false
    }
    else if(this.props.data.signinpassword.length <= 6){
        this.props.error('signinpassword','*Password should be at-least 6 characters')
        temp = false
    }
    else{
        this.props.error('signinpassword','')
    }
    return temp
}

postrequest = ()=>{
    const email = this.props.data.signinemail
    const password = this.props.data.signinpassword
    const loginurl = 'https://api.realworld.io/api/users/login'
    const options = {
        method : 'POST',
        headers: {
           'Content-Type': 'application/json'
         },
        body :  JSON.stringify({
           user:{
               email,
               password
           }
        })
   }
    fetch(loginurl,options)
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

error = ()=>{
    if(this.state.error){
        if(this.state.error.errors['email or password']){
            return <p className='text-center text-danger'>*Email or username {this.state.error.errors['email or password']}</p>
        }
        }
}
onsubmit = async(e)=>{
    e.preventDefault()
    if(this.validation()){
        this.postrequest()
    }
}


  render() {
    console.log(this.props.data.signinemail)
    console.log(this.onsubmit);
    return (
      <div className='p-5 mt-3 d-flex justify-content-center   gap-3'>
        <div className="mt-3  d-none d-lg-block">
            <img src={login}></img>
        </div>
        <div>
        <form className='d-flex flex-column align-items-center mt-5'>
            <h1>Sign In</h1>
            <Link className='text-success' to='/signup'><p>Need an Account?</p></Link>
            <br></br>
            {this.error()}
            <input id='signinemail' type={'email'} placeholder='Email' className='p-3' onChange={this.props.listener} ></input>
            <p className='text-danger'><b>{this.props.data.error.signinemail}</b></p>
                <br></br>
            <input id='signinpassword' type={'password'} placeholder='Password' className='p-3' onChange={this.props.listener}></input>
            <p className='text-danger'><b>{this.props.data.error.signinpassword}</b></p>
            
            <button  type ='submit'className='btn btn-warning px-5 d-flex' onClick={this.onsubmit}>Sign In</button>
        </form>
        </div>
      </div>
    )
  }
}


export default (Signin)