import './App.css';
import {useState} from "react";

function App() {
  const [message, setMessage] = useState("hi")
  // structre 
  // const [varname, changeingname] = useState(value)
  // varname +=1; //wrong
  // changeingname(varname) //correct
  /*
  let a =1;
  a+= 1;

  usestate hook
  const [varname, changeingname] = useState(value)
  changeingname(varname+1)
  */
  return (
    <div className="App">
      <input className='input' value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
      <h1>{message}</h1>
      hello word
    </div>
  );
}

export default App;
