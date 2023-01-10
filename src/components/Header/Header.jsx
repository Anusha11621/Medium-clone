import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'
export default class Header extends Component {
  render() {
    return (
      <nav className='  bg-warning fixed-top border-bottom border-dark '>
        <div className='d-flex justify-content-between bg-warning p-2 '>
            <div>
            
                <Link to='/' className='link  '>
                {/* <svg  xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 26">
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                </svg> */}
                  {/* <span style={{fontSize:'36px'}}>Medium</span> */}
                  <h3>Medium</h3>
                  </Link>
            </div>
            <div >
                <ul className='d-flex gap-4 mt-2 nav-ul'>
                    <Link className='link ' to='/'><li className='d-none d-md-block'>Our Story</li></Link>
                    <Link className='link ' to='/'><li className='d-none d-md-block'>Membership</li></Link>
                    <Link className='link ' to='/'><li className='d-none d-md-block'>Write</li></Link>
                    <Link className='link ' to='/signin' ><li className='d-none d-sm-block'>sign In</li></Link>
                    <Link className='link ' to='/signup'><li>Sign Up</li></Link>
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
