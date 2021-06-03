import React from "react";
import { Compass } from "./components/compass";

export type NDProps = { heading: number };

export const ND: React.FC<NDProps> = ({ heading }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 800 800"
      style={{ enableBackground: "new 0 0 800 800" }}
    >
      <Compass heading={heading} />
    </svg>
  );
};

export default ND;
