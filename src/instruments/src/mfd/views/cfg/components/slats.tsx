import React from "react";
import { SVGText, SVGPath } from "../../../styles";
import { colors } from "../../../../../../globals/colours";
import { number } from "prop-types";

export type TSlatsProps = {
  scaleValue: number;
};

type TSlatProps = {
  x: number;
  y: number;
  scaleValue: number;
};

const SlatIndicator: React.FC<TSlatProps> = ({ x, y, scaleValue }) => {
  if (scaleValue === 100) {
    return (
      <SVGPath
        transform={`translate(${x}, ${y})`}
        d="M28.38,0H0v19.07h28.38V0L28.38,0z"
        color={colors.DISPLAY_GREEN}
      />
    );
  } else if (scaleValue < 100 && scaleValue > 0) {
    return (
      <SVGPath
        transform={`translate(${x}, ${y})`}
        d="M26.38,2v15.07H2V2H26.38 M28.38,0H0v19.07h28.38V0L28.38,0z"
        color={colors.DISPLAY_GREEN}
      />
    );
  } else {
    return <></>;
  }
};

export const Slats: React.FC<TSlatsProps> = ({ scaleValue }) => {
  return (
    <>
      <g id="slats">
        <SVGText transform="matrix(1 0 0 1 358.7276 545.1871)">SLATS</SVGText>
        <SlatIndicator x={209.32} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={277.87} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={243.6} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={312.15} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={455.5} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={489.78} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={524.06} y={527.04} scaleValue={scaleValue} />
        <SlatIndicator x={558.34} y={527.04} scaleValue={scaleValue} />
      </g>
    </>
  );
};
