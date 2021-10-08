import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      fill="none"
      height={24}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10.5} cy={10.5} r={7.5} />
      <path d="M21 21l-5.2-5.2" />
    </svg>
  );
}

export default SvgComponent;