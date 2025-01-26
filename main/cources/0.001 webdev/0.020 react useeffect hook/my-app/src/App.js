import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("hi")
  const handelClick = () => {
    setCount(count+1);
  }
  useEffect(()=>(
    console.log(`count change. the count is ${count}`)
  ),[count])
  useEffect(()=>{
    console.log(`message change. the message is ${message}`)
  },[message])
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handelClick}>Click</button>
      <br></br>
      <input className='input' value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
