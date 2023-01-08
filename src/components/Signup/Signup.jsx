import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Signup extends Component {
constructor(props){
    super(props)
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
onsubmit = (e)=>{
    e.preventDefault()
    this.validation()
}
  render() {
    console.log(this.props.data);
    return (
      <div>
        <form className='d-flex flex-column align-items-center mt-5'>
            <h1>Sign Up</h1>
            <Link className='text-success' to='/signin'><p>Have an Account?</p></Link>
            <br></br>
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