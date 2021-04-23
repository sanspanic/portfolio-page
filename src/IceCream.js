import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={32}
          y1={44}
          x2={32}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9b756d" />
          <stop offset={1} stopColor="#bc9388" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={32}
          y1={37}
          x2={32}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d96bb0" />
          <stop offset={1} stopColor="#e49fc6" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={32}
          y1={63}
          x2={32}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <style>
          {".prefix__cls-2{fill:#8a6762}.prefix__cls-7{fill:#231f20}"}
        </style>
      </defs>
      <title>{"Stick Ice"}</title>
      <g id="prefix__Stick_Ice" data-name="Stick Ice">
        <path
          d="M42 44H22a4 4 0 01-4-4V15a14 14 0 0128 0v25a4 4 0 01-4 4z"
          fill="url(#prefix__linear-gradient)"
        />
        <path
          className="prefix__cls-2"
          d="M46 37v3a4 4 0 01-4 4H22a4 4 0 01-4-4v-3a4 4 0 004 4h20a4 4 0 004-4z"
        />
        <path
          d="M18 15v7a5 5 0 015 5v4a3 3 0 006 0v-4a3 3 0 016 0v7a3 3 0 006 0v-2a5 5 0 015-5V15a14 14 0 00-28 0z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path
          d="M46 15v2a14 14 0 00-28 0v-2a14 14 0 014.1-9.9C30.92-3.69 46 2.59 46 15z"
          fill="#f2b1d9"
        />
        <path
          className="prefix__cls-2"
          d="M23 29a5 5 0 00-5-5v-2a5 5 0 013.54 1.46C23.28 25.22 23 27.09 23 29zM28.12 33.12A3 3 0 0029 31v2a3 3 0 01-6 0v-2a3 3 0 005.12 2.12zM40.12 36.12A3 3 0 0041 34v2a3 3 0 01-6 0v-2a3 3 0 005.12 2.12zM46 27v2a5 5 0 00-5 5v-2a5 5 0 015-5z"
        />
        <path
          d="M32 63a3 3 0 01-3-3V44h6v16a3 3 0 01-3 3z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path fill="#e8c4a6" d="M29 44h6v3h-6z" />
        <path
          className="prefix__cls-7"
          d="M32 0a15 15 0 00-15 15v25a5 5 0 005 5h6v15a4 4 0 008 0V45h6a5 5 0 005-5V15A15 15 0 0032 0zM19 15a13 13 0 0126 0v11.08A6 6 0 0040 32v2a2 2 0 01-4 0v-7a4 4 0 00-8 0v4a2 2 0 01-4 0v-4a6 6 0 00-5-5.92zm15 45a2 2 0 01-4 0V45h4zm8-17H22a3 3 0 01-3-3V23.14A4 4 0 0122 27v4a4 4 0 008 0v-4a2 2 0 014 0v7a4 4 0 008 0v-2a4 4 0 013-3.86V40a3 3 0 01-3 3z"
        />
        <path
          className="prefix__cls-7"
          d="M24.11 17.45l1 2a1 1 0 001.78-.9l-1-2a1 1 0 00-1.78.9zM32 16h2a1 1 0 000-2h-2a1 1 0 000 2zM38.55 9.89C40.75 11 40.68 11 41 11a1 1 0 00.45-1.89l-2-1a1 1 0 00-.9 1.78zM33 8V6a1 1 0 00-2 0v2a1 1 0 002 0zM37.55 20.89C39.75 22 39.68 22 40 22a1 1 0 00.45-1.89l-2-1a1 1 0 00-.9 1.78zM23.89 11.45l1-2a1 1 0 00-1.78-.9l-1 2a1 1 0 001.78.9z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
