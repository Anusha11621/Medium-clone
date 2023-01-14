import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
          comment : "", 
          getcomments:null,
          onclick:false
        }
    }
    handleValue = (event)=>{
      this.setState({
        comment:event.target.value
      })
    }
    onPostMethod = ()=>{
      // let slug = (this.props.data.multiuser&&this.props.data.multiuser.articles.map((data)=>{
      //   return data.slug
      // }));
      fetch(`https://api.realworld.io/api/articles/:slug/comments`,{
        method : 'POST',
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.getItem("app__user")}`
        },
        body:JSON.stringify(
          {
            comment: {
              body: this.state.comment
            }
          }
        )
        
      })
    }
    ongetmethod = ()=>{
      fetch('https://api.realworld.io/api/articles/:slug/comments',{
        method:'GET',
        headers:{
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.getItem("app__user")}`
        }
      })
      .then((res)=>{return res.json()})
      .then((data)=>{
        return(
          this.setState({
            getcomments:data
          })
        )
      })
    }
    componentDidMount(){
      this.ongetmethod()
    }
    onSubmit = ()=>{
      this.onPostMethod()
      this.setState({
        onclick:true
      })
    }
  render() {
    
    return(
        <div >
          <hr></hr>
            {
              localStorage.getItem('app__user')?
              <div className='container text-center textareafocus' style={{width:'90%'}}>
                <textarea rows='4' className='border border-light' onChange={this.handleValue} style={{width:'100%'}}></textarea>
                {/* <br></br> */}
                <div className='d-flex justify-content-between  p-3' style={{background:'#f5f5f5',marginTop:'-7px',border:'5px gray',borderRadius:'0px 0px 10px 10px'}}>
                <img src={JSON.parse(localStorage.getItem('article__user')).image} className='rounded-circle d-none d-md-block' style={{width:'40px',height:'40px'}}></img>
                <button className='btn btn-warning btn-sm' onClick={this.onSubmit}>Post comment</button>
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
            }{
               this.state.onclick?<p>{this.state.comment}</p>:""
            }
        </div>
    )
  }
}
