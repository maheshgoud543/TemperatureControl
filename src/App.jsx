import { useState } from "react";
import './App.css';

function App() {
  const [temp, setTemp] = useState(0);

  let containerClass = "";

  if (temp > 30) {
    containerClass = "very-hot";
  } else if (temp < 0) {
    containerClass = "cold";
  } else {
    containerClass = "normal";
  }

  return (
    <div className={`Container ${containerClass}`}>
      <div className="temp">
        <p>Temperature: {temp} °C</p>
      </div>
      <div className="buttons">
        <button onClick={() => setTemp(temp + 1)}>+</button>
        <button onClick={() => setTemp(temp - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
