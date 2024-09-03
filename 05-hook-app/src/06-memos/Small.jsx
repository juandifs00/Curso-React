import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("me volvi a renderizar :(");

  return <small>{value}</small>;
});

export default Small;
