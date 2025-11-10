import React from "react";

function Star({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
    >
      {/* apply color here! */}
      <path
        d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 
           1.402 8.172L12 18.896l-7.336 3.869 
           1.402-8.172L.132 9.211l8.2-1.193z"
        style={style}
      />
    </svg>
  );
}

export default Star;
