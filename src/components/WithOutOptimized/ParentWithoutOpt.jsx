import React, { useState } from "react";
import ChildWithoutOpt from "./ChildWithoutOpt";

function ParentWithoutOpt() {
  const [count, setCount] = useState(0);
  console.log("Parent without optimized called");
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      <ChildWithoutOpt />
    </div>
  );
}

export default ParentWithoutOpt;
