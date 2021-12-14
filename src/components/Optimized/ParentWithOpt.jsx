import React, { useState } from "react";

function ParentWithOpt({ children }) {
  console.log("parent with optimized called");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count-{count}
      </button>
      {children}
    </div>
  );
}

export default ParentWithOpt;
