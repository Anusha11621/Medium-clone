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
                      {/* <div
                        key={data.slug}
                        className="d-flex align-items-center gap-3 "
                      >
                        <div>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex  align-items-center">
                              <div>
                                <img
                                  src={data.author.image}
                                  className="rounded-circle w-25 h-25"
                                />
                              </div>
                              <div>
                                <span>{data.author.username}</span>
                                <br></br>
                              </div>
                            </div>
                            
                          </div>
                          <br></br>
                          <h5>{data.title}</h5>
                          <p className="text-secondary">
                            {data.description.slice(0, 110)}
                          </p>
                          <div className="d-flex flex-wrap gap-2 text-secondary ">
                            <p>Read More...</p>
                            <p>.</p>
                            <p>{Math.floor(Math.random() * 10 + 1)}min read</p>
                            <p>.</p>
                            <span>{data.tagList[0]}</span>
                          </div>
                        </div>
                        <div>
                          <img
                            src="https://miro.medium.com/fit/c/250/168/1*IODA6FO8_7mtqSX8KyWt-Q.png"
                            className="w-100 h-75 d-none d-md-block"
                          ></img>
                        </div>
                      </div> */}
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
