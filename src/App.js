import './css/App.css';
import React, { useEffect, useState } from 'react';
const author = {
  FirstName: 'Connor',
  LastName: 'Guard'
}
function App() {
  const[resourceType, setResourceType] = useState("Home");
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body classsName = "body">
        <Nav set = {setResourceType} />
        <Page pageName = {resourceType}/>
      </body>
    </div>
  );
}

function Nav(page){
return(
  <div class = "nav">
    <div class = "content"> 
      <div class ="logo"> CONNOR GUARD </div> 
      <button class = "button home bouncy" onClick={() => {page.set("Home"); window.location.href='#home';} }>HOME </button>
      <button class = "button projects bouncy" onClick={() => {page.set("Projects"); window.location.href='#proj';}}>PROJECTS</button>
      <button class = "button about bouncy" onClick={() => {page.set("About me"); window.location.href='#about';}}> ABOUT ME </button>
    </div>
  </div>
)
}

function Page(props){
  return(
    <div class = "page">  
      <div id = "home" class = "page home"> 
        <h2>{props.pageName}</h2> 
      </div>   
      <div id = "proj" class = "page projects"> 
        <h2>{props.pageName}</h2> 
      </div>  
      <div id = "about" class = "page about"> 
        <h2>{props.pageName}</h2> 
      </div>  
    </div>
  )
}

export default App;
