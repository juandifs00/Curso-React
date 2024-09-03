import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a renderizar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(50);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
