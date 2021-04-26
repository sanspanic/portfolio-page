import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      className="waves -mb-1 -mt-20"
      viewBox="0 0 883 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="rgba(157, 50, 239, 1)"
        d="M0 0c59.5 0 59.5 138 119 138V0H0z"
      />
      <path
        fill="rgba(157, 50, 239, 1)"
        d="M118 138c81 0 81-105 162-105V0H118z"
      />
      <path fill="rgba(157, 50, 239, 1)" d="M279 33c77 0 77 94 154 94V0H279z" />
      <path
        fill="rgba(157, 50, 239, 1)"
        d="M432 127c55 0 55-17 110-17V0H432z"
      />
      <path
        fill="rgba(157, 50, 239, 1)"
        d="M541 110c56.5 0 56.5 34 113 34V0H541z"
      />
      <path
        fill="rgba(157, 50, 239, 1)"
        d="M653 144c68 0 68-67 136-67V0H653z"
      />
      <path fill="rgba(157, 50, 239, 1)" d="M788 77c326 0 326-77 652-77H788z" />
    </svg>
  );
}

export default SvgComponent;
