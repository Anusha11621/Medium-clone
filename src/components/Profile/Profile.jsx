import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PrivateHome from '../PrivateHome/PrivateHome'
import '../../App.css'
export default class Profile extends Component {

  render() {
    // console.log(JSON.parse(localStorage.getItem('article__user')).image)
    return (
      <div style={{paddingTop:'70px'}} >
        <div className='p-5 d-flex flex-column align-items-center bg-light w-100'>
          <img src={JSON.parse(localStorage.getItem('article__user')).image} className="rounded-circle" style={{height:'100px',width:'100px'}}></img>
          <br></br>
          <h5>{(localStorage.getItem('user_name'))}</h5> 
          
          <br></br>
          <Link to='/settings' className='link '><button className='btn btn-outline-light text-secondary border-secondary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill pb-1" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>
            Edit Profile Settings</button></Link>
        </div>
        <br></br>
        <div style={{padding:'1% 10% 1% 10%'}}>
        <h5 className='text-success pb-3 border-bottom border-success' style={{width:'105px'}}>My Articles</h5>
        <br></br>
        <PrivateHome></PrivateHome>
        </div>
      </div>
    )
  }
}
