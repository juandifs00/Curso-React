import { useMemo, useState } from "react";
import useCounter from "../hooks/useCounter";

const heavyStuff = (iterationNumber) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

const MemorizeHook = () => {
  const { counter, increment } = useCounter(4000);

  const [show, setshow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemorizeHook;
