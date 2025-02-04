import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  useEffect(()=>{
    a.current=a.current+1
    console.log(`count change. the a is ${a.current}`)
  })
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>a is {a.current}</h1>
      <button onClick={() => a.current=a.current+1}>Increment</button>
    </div>
  );
}

export default App;
