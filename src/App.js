import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState("");
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }
  }, [count]);

  const Down = (e) => {
    if (e.key === "Enter") {
      const newValue = Math.floor(Number(input));
      if (isNaN(newValue)) {
        setCount(0);
      } else {
        setCount(newValue);
      }
      setInput("");
    }
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={Down}
      />
      <div>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default App;
