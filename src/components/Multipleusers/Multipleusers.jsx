import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Multipleusers extends Component {
constructor(props){
    super(props)
  }
  render() {
    if(this.props.data.multiuser){
        // console.log(this.props.data.tags.tags);
        return (
            <div className='container'>
                <div className='row'>
                        <div className='col-sm-12 col-md-8 ' >
                        <h4 className='text-success'>Global Feed</h4>
                        <hr></hr>
                        {
                        this.props.data.multiuser.articles.map((data)=>{
                            return (
                                <>
                                <Link className='link' to={`/article/${data.slug}`}>
                                <div  key = {data.slug}>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <div>
                                                <img src={data.author.image} className='rounded-circle'/>
                                            </div>
                                            <div>
                                                <span>{data.author.username}</span>
                                                <br></br>
                                                <span>{data.createdAt.slice(0,10)}</span>
                                            </div>   
                                        </div>
                                        <div className='p-3'>
                                            <p>♡160</p>
                                        </div>
                                    </div>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <div className='d-flex flex-wrap justify-content-between'>
                                        <div>
                                            <p>Read More...</p>
                                        </div>
                                        <div className='d-flex flex-wrap'>
                                            {
                                                data.tagList.map((tag)=>{
                                                    return(
                                                        <span className='p-1 m-1 border border-secondary rounded'>{tag}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                </>
                            )
                        })
                    }  
                    </div>
                    {
                        this.props.data.tags ?
                         <div className='col-sm-12 col-md-4 d-none d-md-block bg-light h-100 mt-5 rounded' >
                        <p>Popular Tags</p>
                        <div className='d-flex flex-wrap gap-2'>
                            {
                                this.props.data.tags.tags.map((data)=>{
                                    return (
                                    <p className='bg-secondary text-white p-1 rounded'>{data}</p>
                                    )
                                })
                            }
                        </div>
                    </div>: 
                     <div className='col-sm-12 col-md-4 d-none d-md-block bg-light h-100 mt-5 rounded' >
                     <p>Popular Tags</p>
                     <div className='d-flex flex-wrap gap-2'>
                     <h4>Tags are Loading....</h4>
                     </div>
                 </div>
                    
                    }
                        
                </div>
            </div>
          )
    } 
    else if(!this.props.data.multiuser){
       return (
        <div className='p-5 m-5 d-flex justify-content-center gap-3'>
        {/* <h3 className='pt-5 mt-3'>Loading....</h3> */}
        <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">L</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">o</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">a</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">d</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">i</span>
          </div>
          
      </div>
       )
    } 
  }
}
