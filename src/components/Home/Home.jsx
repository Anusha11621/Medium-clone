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
      <div>
        <div className='h-75 bg-warning p-5'>
        <h1 className='display-1'>Stay curious.</h1>
        <h4 className='display-6'>Discover stories, thinking, and expertise from writers on any topic.</h4>
        <br></br>
        <button className='btn btn-dark '> Get Started</button>
        </div>
        <br></br>
        <Multipleusers data={this.props.data}/>
      </div>
    )
  }
}





