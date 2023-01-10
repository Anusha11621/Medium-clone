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
            <div className='container px-5'>
                <div className='row'>
                        <div className='col-sm-12 col-md-7 ' >
                        <h6 className='text-success'>Global Feed</h6>
                        <hr></hr>
                        {
                        this.props.data.multiuser.articles.map((data)=>{
                            return (
                                <>
                                <Link className='link' to={`/article/${data.slug}`}>
                                <div  key = {data.slug} className="d-flex align-items-center gap-3 ">
                                    <div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <div>
                                                <img src={data.author.image} className='rounded-circle'/>
                                            </div>
                                            <div>
                                                <span>{data.author.username}</span>
                                                <br></br>
                                                {/* <span>{data.createdAt.slice(0,10)}</span> */}
                                            </div>   
                                        </div>
                                        {/* <div className='p-3 border-succuss'>
                                            <p style={{border:'2px solid green',borderRadius:'8px',padding:'5px',width:'50px'}}>♡{data.favoritesCount}</p>
                                        </div> */}
                                    </div>
                                    <br></br>
                                    <h5>{data.title}</h5>
                                    <p className='text-secondary'>{data.description.slice(0,110)}</p>
                                    <div className='d-flex flex-wrap gap-2 text-secondary '>
                                        <p>Read More...</p>
                                        <p>.</p>
                                        <p>{Math.floor(Math.random()*10+1)}min read</p>
                                        <p>.</p>
                                        <span >{data.tagList[0]}</span>
                                    </div>
                                    </div>
                                    <div>
                                        <img src='https://miro.medium.com/fit/c/250/168/1*IODA6FO8_7mtqSX8KyWt-Q.png' className='w-100 h-75 d-none d-md-block'></img>
                                    </div>
                                </div>
                                </Link>
                                <hr></hr>
                                </>
                            )
                        })
                    }  
                    </div>
                    {
                        this.props.data.tags ?
                         <div className='col-sm-12 col-md-5 d-none d-md-block  h-100 mt-5 rounded p-5' >
                        <p><b>DISCOVER MORE OF WHAT MATTERS TO YOU</b></p>
                        <div className='d-flex flex-wrap gap-2'>
                            {
                                this.props.data.tags.tags.map((data)=>{
                                    return (
                                    <p className='border border-secondary text-gray p-1 rounded'>{data}</p>
                                    )
                                })
                            }
                        </div>
                    </div>: 
                     <div className='col-sm-12 col-md-4 d-none d-md-block bg-light h-100 mt-5 rounded' >
                     <p><b>DISCOVER MORE OF WHAT MATTERS TO YOU</b></p>
                     <div className='d-flex flex-wrap gap-2'>
                     <h5>Tags are Loading....</h5>
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
          
          
      </div>
       )
    } 
  }
}
