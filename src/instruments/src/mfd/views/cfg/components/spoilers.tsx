import React from "react";
import { colors } from "../../../../../../globals/colours";
import { ControlSurface, EControlSurfaceDirections } from "./control-surface";
import { SVGPolygon } from "../styles";

export type TSpoilersProps = {
  scaleValue: number;
};

export const Spoilers: React.FC<TSpoilersProps> = ({ scaleValue }) => {
  if (scaleValue > 0) {
    return (
      <>
        <g id="spoilers-left">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="242.8,378.96 239.8,378.96 239.8,350.71 249.18,350.71 249.18,353.71 242.8,353.71"
          />
          <ControlSurface
            x={242.8}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={274.85}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={306.89}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={338.94}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="364,378.96 361,378.96 361,353.71 354.61,353.71 354.61,350.71 364,350.71"
          />
        </g>
        <g id="spoilers-right">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="435.72,378.96 432.72,378.96 432.72,350.71 442.11,350.71 442.11,353.71 435.72,353.71"
          />
          <ControlSurface
            x={435.73}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={467.77}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={499.82}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={531.86}
            y={353.71}
            width={22.04}
            height={27.67}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="556.92,378.96 553.92,378.96 553.92,353.71 547.53,353.71 547.53,350.71 556.92,350.71"
          />
        </g>
      </>
    );
  } else {
    return <></>;
  }
};
