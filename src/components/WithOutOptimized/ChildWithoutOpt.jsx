import React from "react";

function ChildWithoutOpt() {
  console.log("Child without optimized called");

  return (
    <div>
      <h3>Without Optimized Count</h3>
    </div>
  );
}

export default ChildWithoutOpt;
