  
import './App.css';
import { useState } from 'react';
import data from "./data.json"
console.log(data)
function App() {
  let[showData,setShowData]=useState(data)
  let renderedData=showData?showData.map((item,index)=>{
    return<> <div key={index}>
      {Object.keys(item).map(key=>
       <p key={key}>{key} : {item[key]}</p>
        )}
    </div><br/></>
}):<h3 className='text-center'>All Data are cleared</h3>
let clearData=()=>{
  setShowData();
}
let button=showData?<button className="btn btn-danger btn-lg" onClick={clearData}>Clear</button>:""
 
  return (
    <div className="container App my-5">
      <h1 className='text-center my-5'>User Data</h1>
     {renderedData}
      {button}
    </div>
  );
}

export default App;
