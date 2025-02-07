import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]); // Recalculates only when 'num' changes

  return <p>Result: {expensiveResult}</p>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render: {count}</button>
      <button onClick={() => setNum(num + 1)}>Change Num: {num}</button>
      <ExpensiveCalculation num={num} />
    </div>
  );
}
