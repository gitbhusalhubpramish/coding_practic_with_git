import './App.css';
import {useState} from "react";

function App() {
  const [message, setMessage] = useState("")
  return (
    <div className="App">
      <input className='input' value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
      <h1>{message}</h1>
      hello word
    </div>
  );
}

export default App;
