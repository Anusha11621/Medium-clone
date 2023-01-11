import React, { Component } from 'react'

export default class Error extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center pt-5 mt-5'>
        {/* <p>PAGE NOT FOUND</p>
        <h2 className='display-1 text-secondary'>404</h2>
        <h4 className='display-5 text-secondary'>Out of nothing, something.</h4> */}
        <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000' className='w-50 h-50'></img>
      </div>
    )
  }
}
