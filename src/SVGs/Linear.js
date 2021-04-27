import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path fill="#9d32ef" d="M0 96l1440 192v32H0z" />
    </svg>
  );
}

export default SvgComponent;
