import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Remote Application</h1>
      <Button />
      <div className="card">
        <button
          className="shared-btn"
          onClick={() => setCounter((count) => count + 1)}
        >
          count is {counter}
        </button>
      </div>
    </>
  );
}

export default App;
