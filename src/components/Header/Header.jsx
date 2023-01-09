import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
export default class Header extends Component {
  render() {
    return (
      <nav className='  bg-warning fixed-top border-bottom border-dark '>
        <div className='d-flex justify-content-between bg-warning p-2 '>
            <div>
                <h1>Medium</h1>
            </div>
            <div >
                <ul className='d-flex gap-4 mt-2 nav-ul'>
                    <Link className='link' to='/'><li className='d-none d-md-block'>Our Story</li></Link>
                    <Link className='link' to='/'><li className='d-none d-md-block'>Membership</li></Link>
                    <Link className='link' to='/'><li className='d-none d-md-block'>Write</li></Link>
                    <Link className='link' to='/signin' ><li className='d-none d-sm-block'>sign In</li></Link>
                    <Link className='link' to='/signup'><li><button className='btn btn-dark rounded'>Get Started</button></li></Link>
                </ul>
            </div>
        </div>
      </nav>
      // <nav className="navbar  bg-warning fixed-top border-bottom border-dark ">
      //    <div className='d-flex justify-content-around bg-warning  '>
      //        <div>
      //            <h1>Medium</h1>
      //        </div>
      //        <div >
      //            <ul className='d-flex gap-4 mt-2 nav-ul'>
      //                <Link className='link' to='/'><li>Home</li></Link>
      //                <Link className='link' to='/signin'><li>sign In</li></Link>
      //                <Link className='link' to='/signup'><li>sign up</li></Link>
      //            </ul>
      //        </div>
      //    </div>
      // </nav>
    )
  }
}
