import React, { Component } from 'react'
import Spinner from '../src/Spinner.gif'

export class Spiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinner} alt="" style={{width:"50px",height:"50px"}} />
      </div>
    )
  }
}

export default Spiner
