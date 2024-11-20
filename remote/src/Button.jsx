import useCount from "./store";

export const Button = () => {
  const [state, setState] = useCount(0);
  return (
    <div>
      <button
        className="shared-btn"
        data-source="remote"
        onClick={() => setState((s) => s + 1)}
      >
        Click Remote Button: {state}
      </button>
    </div>
  );
};

export default Button;
