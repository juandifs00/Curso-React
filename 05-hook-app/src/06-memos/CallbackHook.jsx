import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(100);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   const incrementFather = () => {
  //     setCounter(counter + 50);
  //   };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>

      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};

export default CallbackHook;
