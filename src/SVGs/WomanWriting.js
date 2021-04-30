import React from "react";
import { motion } from "framer-motion";

function SvgComponent(props) {
  const imgVariants = {
    float: {
      rotate: 180,
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
      },
    },
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" {...props}>
      <defs>
        <pattern
          id="prefix__New_Pattern"
          data-name="New Pattern"
          width={12}
          height={12}
          patternUnits="userSpaceOnUse"
          viewBox="0 0 12 12"
        >
          <path fill="none" d="M0 0h12v12H0z" />
          <circle className="prefix__cls-2" cx={12} cy={9} r={2} />
          <circle className="prefix__cls-2" cx={6} cy={12} r={2} />
          <circle className="prefix__cls-2" cy={9} r={2} />
          <circle className="prefix__cls-2" cx={12} cy={3} r={2} />
          <circle className="prefix__cls-2" cx={6} cy={6} r={2} />
          <circle className="prefix__cls-2" cy={3} r={2} />
          <circle className="prefix__cls-2" cx={6} r={2} />
        </pattern>
        <style>
          {
            ".prefix__cls-12,.prefix__cls-6,.prefix__cls-7,.prefix__cls-9{fill:none}.prefix__cls-2{fill:#949494}.prefix__cls-3{fill:url(#prefix__New_Pattern)}.prefix__cls-6,.prefix__cls-9{stroke:#000}.prefix__cls-12,.prefix__cls-6,.prefix__cls-7,.prefix__cls-9{stroke-linecap:round}.prefix__cls-6{stroke-miterlimit:10}.prefix__cls-6,.prefix__cls-9{stroke-width:2.5px}.prefix__cls-7{stroke:#fff}.prefix__cls-12,.prefix__cls-7,.prefix__cls-9{stroke-linejoin:round}.prefix__cls-12,.prefix__cls-7{stroke-width:12.98px}.prefix__cls-12{stroke:#9d32ef}"
          }
        </style>
      </defs>
      <title>{"Artboard 1"}</title>
      <g id="prefix__Shadow">
        <path
          className="prefix__cls-3"
          d="M512.79 368.48l-5.8 18.29 15.14 11.58 2.75-12.11 9.02-24.56-10.6 5.72-10.51 1.08zM465.79 403.67c-3.08 2.47-10.41 5.45-14 2.82-5 10.15-10.19 24.71-10.19 24.71l-4.6 18.27-5.14 33.38-2.09 26.82-.78 32.3.58 25.46 1.58 20 4.42 3.5 20.73 5 27.27 3.12h48.53s17.21-1.14 8.62-3.54-31.23-10.17-46.31-26.67c-13.43-3.3-17.94-5.81-17.94-5.81l-6.9-6.5-6.26-11.81-2.31-10.38-2-13.94-.71-27.51-10.22-3.95-3.07-17.28 1.35-19.17 2.02-16.49 7.44-21 5.31-7.13z"
        />
      </g>
      <g id="prefix__Vector">
        <motion.path
          variants={imgVariants}
          d="M284.8 695.1v308.4h717V695.1zm269.54 170.36l22.22-37.29 17.08 10.1-5.14 9 39.85 58.22zm196.34-44.93l-19.33-38.86 17.73-8.9 4.79 9.19 70.52-2z"
          fill="#F0ED46"
        />
        <g id="prefix__Layer_3" data-name="Layer 3">
          <path
            className="prefix__cls-6 hair"
            d="M430.41 581.67c-8.28 5.16-24.5 9.56-57.61 10.63-34.38 0-62.6-33-62.6-76-1-93.7 96.4-111.5 150.6-216.1 24.9-48.1 55.1-46.9 62.7-46.5 16.6.9 40.2 14 40.2 36.9a27.44 27.44 0 01-9.56 21.19M535.56 359.54c-3.58 8.43-11 22.58-13.43 38.81"
          />
        </g>
        <path
          className="prefix__cls-7"
          d="M369.2 768.1h570.7M590.37 850H864.8M415.7 850h147.85"
        />
        <path d="M692.4 605.9c20.5 0 50.6 122.8 63.6 158.9-2.7 7.5-18.1 19.3-26.5 19.3-16.3-27.3-52.8-85.8-59.2-94.8-5.2-7.3 1.6-83.4 22.1-83.4z" />
        <path
          d="M684.7 363.4c3.5-2.2 1.9-.7 4.6-4.8"
          style={{
            isolation: "isolate",
          }}
          opacity={0.27}
        />
        <path
          className="prefix__cls-6"
          d="M555.33 583.45a61 61 0 01-1.63 8.15c-33.3 14.1-120.2 5.6-122.6-4.2-2.14-8.64-12.74-182.11 44.38-203.66M506.62 386c42.55 21.36 52 114.1 50.76 168.7"
        />
        <path
          className="prefix__cls-9"
          d="M492.7 390.51c-8.82-1.31-18.63-4.46-17.6-6.11 9.75-16.5 11.85-33.7 13.48-43.37M513.27 368.41c-1.81 4.36-5.08 12.31-6.65 17.62"
        />
        <path
          className="prefix__cls-6"
          d="M458.52 493c-.58 4.16.05 9.31 0 12.45-.2 17 .6 36 10.8 50.3 4 5.6 10.6 11 17 10.9 10.1 4 27 8.6 27 8.6l25.6 5.6s43.2 7.7 64.5 7.1c7.1-.2 14.3-1 21.4-.8 4.1.1 10.6 1.4 14.5 0 1.1-.4.8-2.9.6-3.8-.9-3.4-4.2-5.8-7.1-7.3-6.9-3.4-10.8-1.3-17.9-1.1-5.8.1-12.7-2.9-22.8-6.8-11.9-4.7-25.5-10.3-37.6-14.4-13.8-4.7-27.9-9.7-41.4-15.2a80.36 80.36 0 00-8.3-2.7 146.42 146.42 0 002.2-22c.3-8 .4-16.4-.7-24.3"
        />
        <path
          className="prefix__cls-6"
          d="M513.05 463.78c1.56 10.76 1.73 19.38.75 22.12-6.2 3.6-40.5 15.7-65.5 3.4-7.7-20.4-1-84.1 23.9-88.2 6.49-1 12.12 1.09 17 5.12"
        />
        <path
          className="prefix__cls-9"
          d="M502.86 364.94a22.83 22.83 0 005.64 2.56c9.09 2.78 18.87-.5 27.06-8M503.15 323.09a106.15 106.15 0 01-20.55 2.71 9 9 0 00-1.9 5.3 9.2 9.2 0 007.7 8.9l.18 1M535.56 359.54c7.12-6.48 13-16.11 16.24-27.64 3.4-12.6 3.1-25-.4-34.9-1.87 1.78-3.8 3.5-5.79 5.14"
        />
        <path d="M577.9 589.3c18 0 83-.5 94.9-.5" fill="#9d32ef" />
        <path
          d="M566.8 590.2c19 0 84.6-1.6 95.5-1.6 8.4-13 47.6-81.5 50.2-86.7"
          strokeWidth={5.79}
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#9d32ef"
          fill="none"
        />
        <motion.path
          variants={imgVariants}
          animate="float"
          className="prefix__cls-12"
          d="M363.3 814.8L318.5 770l44.8-44.8M919.2 974.8L964 930l-44.8-44.8"
        />
        <path className="prefix__cls-7" d="M369.2 929.4h514.5" />
        <path d="M692.4 608.7c.3-14-51.2-17.9-83.7-17.9-14.55 0-36.47.76-57 1.6-32.95 12.32-110.06 5.38-119.63-3.59-4.46 5.06-7.14 14.59-7.14 32.49 0 41.8 45.7 76.7 99.8 76.7s78.2-1.4 83.1-2.6c1.5 13.8-30.5 108.6-33.9 133 2.4 6.5 18.3 14.6 25 14.6s95.77-144.8 93.47-234.3z" />
        <path
          className="prefix__cls-9"
          d="M576.56 828.17l-22.22 37.29 74.01 40.03-39.85-58.22 5.14-9M731.35 781.67l19.33 38.86 73.71-40.59-70.52 2.02-4.79-9.19"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
