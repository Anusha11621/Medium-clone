import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Signin extends Component {
constructor(props){
    super(props)
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
onsubmit = (e)=>{
    e.preventDefault()
    this.validation()
}
  render() {
    console.log(this.props.data);
    return (
      <div>
        <form className='d-flex flex-column align-items-center mt-5'>
            <h1>Sign In</h1>
            <Link className='text-success' to='/signup'><p>Need an Account?</p></Link>
            <br></br>
            <input id='signinemail' type={'email'} placeholder='Email' className='p-3' onChange={this.props.listener} ></input>
            <p className='text-danger'><b>{this.props.data.error.signinemail}</b></p>
                <br></br>
            <input id='signinpassword' type={'password'} placeholder='Password' className='p-3' onChange={this.props.listener}></input>
            <p className='text-danger'><b>{this.props.data.error.signinpassword}</b></p>
            
            <button  type ='submit'className='btn btn-success d-flex' onClick={this.onsubmit}>Sign In</button>
        </form>
      </div>
    )
  }
}
