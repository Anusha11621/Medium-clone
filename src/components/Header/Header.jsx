import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
export default class Header extends Component {
  render() {
    return (
      <nav className='stickey'>
        <div className='d-flex justify-content-around bg-warning  '>
            <div>
                <h1>Medium</h1>
            </div>
            <div >
                <ul className='d-flex gap-4 mt-2 nav-ul'>
                    <Link className='link' to='/'><li>Home</li></Link>
                    <Link className='link' to='/signin'><li>sign In</li></Link>
                    <Link className='link' to='/signup'><li>sign up</li></Link>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}
