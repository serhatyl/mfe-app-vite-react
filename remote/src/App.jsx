import "./App.css";
import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Remote Application</h1>
      <div>
        <button
          type="button"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          click remote app {count}
        </button>
      </div>
      <div>{count}</div>
    </>
  );
}

export default App;
