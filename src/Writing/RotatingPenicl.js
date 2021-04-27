import React from "react";
import { Pencil } from "phosphor-react";

const RotatingPencil = () => {
  return (
    <Pencil size={80} className="mx-auto" color="darkorchid" weight="duotone">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4s"
        repeatCount="indefinite"
      ></animate>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="5s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Pencil>
  );
};

export default RotatingPencil;
