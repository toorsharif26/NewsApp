// import React, { Component } from 'react'
import loading from './loading.gif'
import React from 'react'

export const Spinner = () => {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }


export default Spinner