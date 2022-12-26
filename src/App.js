// import loo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
const apikey="c66d55f737ee4be883ff300f348b13ad"
const [progress, setProgress] = useState(0)  

  
  let pagesize=6;
    return (

<div>
<Router>
<NavBar/>
<LoadingBar color='#3388FF' progress={progress}></LoadingBar>

      <Switch >
      
      <Route path='/gereral' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key={"general"} country={'in'} category={"general"}/></Route>
      <Route path='/technology' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key="technology" country={'in'} category={"technology"}/></Route>
<Route path='/science' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key="science" country={'us'} category={"science"}/></Route>
<Route path='/sports' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} country={'us'} key="sports" category={"sports"}/></Route>
<Route path='/health' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key={"health"} country={'us'} category={"health"}/></Route>
<Route path='/entertainment' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key={"entertainment"} country={'us'} category={"entertainment"}/></Route>
<Route path='/business' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key={"business"} country={'us'} category={"business"}/></Route>
<Route path='/' >
<News setProgress={setProgress} pageSize={pagesize} apikey={apikey} key={"general"} country={'in'} category={"general"}/></Route>
   </Switch>
      </Router>
      </div>

    )
  }



export default App;
