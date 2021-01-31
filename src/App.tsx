import { useState } from 'react';
import './App.css';

type clickHandler = (num:number)=>void

function MyComponent(){
  const [count, setCount] = useState<number>(0);
  const handleClick:clickHandler = () => {setCount(count+1)} // Why isn't arrow function showing a compile error in the params?
  return (
    <div>
      my component {count}<br />
      <button onClick={()=>handleClick(34)}>Increment</button><br />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;
