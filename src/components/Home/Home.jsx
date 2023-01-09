import React, { Component } from 'react'
import Multipleusers from '../Multipleusers/Multipleusers'
let url = 'https://api.realworld.io/api/articles'

export default class Home extends Component {
  constructor(props){
    super(props)
  }
  // componentDidMount(){
  //   this.props.fetchingdata(url)
  // }
  render() {
    // console.log(this.props.data);
    return (
      <div className='mt-3  '>
        <div className='h-75 bg-warning p-5 text-center'>
        <h1 className='display-1 pt-5 pl-5'>Stay curious.</h1>
        <h4 className='display-6 pl-5'>Discover stories, thinking, and expertise from writers on any topic.</h4>
        <br></br>
        <button className='btn btn-dark '> Get Started</button>
        </div>
        <br></br>
        <Multipleusers data={this.props.data}/>
      </div>
    )
  }
}





