import "./App.css";

import Button from "remoteApp/Button";
import useStore from "remoteApp/store";

function App() {
  const [count, setCount] = useStore();

  return (
    <>
      <div>
        <h1>Host Application</h1>
      </div>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
      <div className="card">
        <Button />
      </div>
    </>
  );
}

export default App;
