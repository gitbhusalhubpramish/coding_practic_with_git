import './App.css';
import Data from "./sample.json"

function App() {
  return (
    <div className="App">
      {Data.Name}
      <br></br>
      {Data.Age}
      {Data.Courses.map((item, index) => {
        return <ul>{index+1}. {item}</ul>
      })}
    </div>
  );
}

export default App;
