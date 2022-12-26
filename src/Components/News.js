// import React, { Component } from 'react'
import NewsItemC from './NewsItemC'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component'
import PropTypes from 'prop-types'
import React,{useEffect,useState} from 'react';

const News= (props)=> {

    News.defaultProps={
    country:'in',
    pageSize:8,
    category:'health',

  }
  News.propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  } 
  
 const capatilize= (s)=>
  {
      return s[0].toUpperCase() + s.slice(1);
  }
    
const[articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[totalResults,setTotalResults]=useState(0)

document.title=`${capatilize( props.category)}-Notify`;
  
const  updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
setLoading(true);    
    let data=await fetch(url);
    props.setProgress(30);
    let parseData=await data.json()
    props.setProgress(70);
setArticles(parseData.articles)
setTotalResults(parseData.totalResults)
setLoading(false)
props.setProgress(100);
 }
 useEffect(() => {
   updateNews();
 }, [])
 
//  async componentDidMount(){
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
// this.setState({loading:true});    
//     let data=await fetch(url);
//     let parseData=await data.json()
// this.setState({articles:parseData.articles,
//     totalResults:parseData.totalResults,
//     loading:false
// })
//   }


//   handleNextClick=()=>{
//     console.log("next");
// if(this.state.page >Math.ceil(this.state.totalResults/props.pageSize)){
// }
//  else{   this.setState({page:this.state.page +1})
//     this.updateNews();
// }
// }

//   handlePreClick=async()=>{

// this.setState({page:this.state.page -1})
// this.updateNews();  
// }

const fetchMoreData=async()=>{
        setPage(page +1);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
setLoading(true);    
    let data=await fetch(url);
    let parseData=await data.json()
setArticles(articles.concat(parseData.articles))
setTotalResults(parseData.totalResults)
setLoading(false)
}
 return (<>
      <InfiniteScroll
dataLength={articles.length}
next={fetchMoreData}
hasMore={articles.length !==totalResults}
loader={loading && <Spinner/>}  >    
        <div className='container'>
        <div className='row'>
        <h3 className='text-center' style={{margin:"30px 1px",marginTop:"90px"}}>Notify-Top {capatilize(props.category)} News Headlines</h3>
        {loading && <Spinner/>}
        { articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItemC  title={element.title} discription={element.description} author={element.author} date={element.publishedAt} imgUrl={element.urlToImage} NewsUrl={element.url}/>
          </div>
        })}
        </div></div>
</InfiniteScroll>
 
        {/* <div className='container d-flex justify-content-between my-4' >
        <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-outline-info my-2" onClick={this.handlePreClick}>&larr;Pre</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-sm btn-outline-info my-2" onClick={this.handleNextClick}>Next&rarr;</button>
        </div> */}
      
      </>

    )
  
    }

export default News