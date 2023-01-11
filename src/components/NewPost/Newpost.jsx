import React, { Component } from 'react'
import '../../App.css'
export default class Newpost extends Component {
  render() {
    return (
      <div className='container pt-5 mt-5'>
          <div className='d-flex justify-content-end '>
            <button className='btn btn-success ' disabled>Publish</button>
          </div>
          <div>
          <textarea className='inputval'  placeholder='Article Title'></textarea>
          </div>
          
          <div>
          <textarea className='textarea' rows={'20'} placeholder='Tell Your Story...'></textarea>
          </div>
          
      </div>
    )
  }
}
