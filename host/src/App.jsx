import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Host Application</h1>
      </div>
      <div className="card">
        <Button />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
