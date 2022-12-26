// import React, { Component } from 'react'
import React from "react"

const NewsItemC=(props)=>{   
  // let {title,discription,imgUrl,NewsUrl,author,date}=this.props;
    return (<>
      <div> <div className="card " >
      <img src={props.imgUrl?props.imgUrl:"https://s.yimg.com/os/creatr-uploaded-images/2020-06/5cf464f0-b4cc-11ea-8efd-ce8e88c30ab6"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}...</h5>
        <p className="card-text">{props.discription}...</p>
        <a href={props.NewsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        <p className="card-text"><small className="text-muted">By {!props.author?"unknown":props.author} on {new Date(props.date).toGMTString()}</small></p>

      </div>
    </div>
    </div>
    </>)
  }


export default NewsItemC