import React, { Component } from 'react'
import Loading from "../Loading";
import { Link } from 'react-router-dom';
import '../../App.css'
export default class PrivateHome extends Component {
    constructor(props){
        super()
        this.state = {
            data:null
        }
    }
    componentDidMount(){
        const headers = {
            authorization: `Token ${localStorage.getItem("app__user")}`,
            "Content-Type": "application/json",
          }
        fetch('https://api.realworld.io/api/articles?limit=10&offset=0',{
            method: "GET",
            headers: headers,
        })
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            this.setState({
                data:data
            })
        })
    }
  render() {
    if(this.state.data){
        // console.log(this.state.data.articles);
        return(
            <div>
                {this.state.data.articles.map((data) => {
                return (
                  <>
                    <Link className="link" to={`/article/${data.slug}`}>
                      <div className='d-flex align-items-center gap-2'>
                        <div>
                          <img src ={data.author.image} style={{height:'40px',width:'40px'}} className="rounded-circle"></img>
                        </div>
                        <div>
                          <span>{data.author.username}</span>
                          <br></br>
                          
                          <span>{data.createdAt.slice(0,10)}</span>
                        </div>
                        
                      </div>
                      <br></br>
                      <h5>{data.title}</h5>
                      <p className='text-secondary'>{data.description}</p>
                    </Link>
                    <hr></hr>
                  </>
                );
              })}
            </div>
        )
    }
    else{
        return <Loading></Loading>
    }
    
  }
}
