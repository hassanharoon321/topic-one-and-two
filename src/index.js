//Import the react & reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

const helo = ()=>{
    return "Hello jani button"
}

const newData = ()=>{
    return (new Date().toLocaleTimeString()     ) 
}

//Create a React Component
const App = ()=>{
   
    return (
        <div>
            <h1>Current Time</h1>
            <h2>{newData()}</h2>
        </div>
        
        
        
    //     <div>
    //      <label>
    //          Enter Name:
    //      </label>
    //      <input type="text" id="name"/>
    //  <button style={{backgroundColor:"blue",color:"white"}}>{helo()}</button>
    //  </div>
    )
}

//Take react component & show it on screen

ReactDOM.render(
   <App/>,
   document.querySelector("#root") 
)