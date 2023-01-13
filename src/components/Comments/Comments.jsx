import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
export default class Comments extends Component {
    constructor(props){
        super(props)
    }
  render() {
    // console.log(this.props.data);
    return(
        <div >
          <hr></hr>
            {
              localStorage.getItem('app__user')?
              <div className='container text-center textareafocus' style={{width:'90%'}}>
                <textarea rows='4' className='border border-light' style={{width:'100%'}}></textarea>
                {/* <br></br> */}
                <div className='d-flex justify-content-between  p-3' style={{background:'#f5f5f5',marginTop:'-7px',border:'5px gray',borderRadius:'0px 0px 10px 10px'}}>
                <img src={JSON.parse(localStorage.getItem('article__user')).image} className='rounded-circle d-none d-md-block' style={{width:'40px',height:'40px'}}></img>
                <button className='btn btn-warning btn-sm'>Post comment</button>
                </div>
              </div>:
              <p className='text-center'>
                <b>
                <Link className='link text-warning' to='/signin'>Sign-in </Link>
                 or 
                 <Link className='link text-warning' to='/signup'> Sign-up </Link>
                 to  comment on a post
                </b>
              </p>
            }
        </div>
    )
  }
}
