import React from "react";
import { SVGPolygon } from "../../../styles";
import { colors } from "../../../../../../globals/colours";
import { ControlSurface, EControlSurfaceDirections } from "./control-surface";

export type TAileronsProps = {
  scaleValue: number;
};

export const Ailerons: React.FC<TAileronsProps> = ({ scaleValue = 0 }) => {
  const calculatePercent = () => {};
  return (
    <>
      {scaleValue > 0 && (
        <g id="aileron-left-down">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="158.67,409.76 158.67,387.13 155.67,387.13 155.67,396.89 150.85,396.89 150.85,398.89 155.67,398.89
		155.67,412.76 164.75,412.76 164.75,409.76"
          />
          <ControlSurface
            x={158.67}
            y={387.13}
            width={66.09}
            height={22.62}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="224.76,409.76 224.76,387.13 227.76,387.13 227.76,396.89 232.57,396.89 232.57,398.89 227.76,398.89
		227.76,412.76 218.67,412.76 218.67,409.76"
          />
        </g>
      )}
      {scaleValue < 0 && (
        <g id="aileron-left-up">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="158.67,353.71 158.73,384.49 155.73,384.49 155.67,370.36 150.32,370.36 150.32,368.36
			155.67,368.36 155.67,350.71 164.75,350.71 164.75,353.71	"
          />
          <ControlSurface
            x={158.67}
            y={353.71}
            width={66.09}
            height={30.77}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="224.76,353.71 224.69,384.49 227.69,384.49 227.76,370.36 233.1,370.36 233.1,368.36 227.76,368.36
		227.76,350.71 218.67,350.71 218.67,353.71"
          />
        </g>
      )}
      {scaleValue < 0 && (
        <g id="aileron-right-down">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="571.81,409.76 571.81,387.13 568.81,387.13 568.81,396.89 564,396.89 564,398.89 568.81,398.89
		568.81,412.76 577.9,412.76 577.9,409.76"
          />
          <ControlSurface
            x={571.81}
            y={387.13}
            width={66.09}
            height={22.76}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="637.9,409.76 637.9,387.13 640.9,387.13 640.9,396.89 645.72,396.89 645.72,398.89 640.9,398.89
		640.9,412.76 631.82,412.76 631.82,409.76"
          />
        </g>
      )}
      {scaleValue > 0 && (
        <g id="aileron-right-up">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="571.81,353.71 571.88,384.49 568.88,384.49 568.81,370.36 563.47,370.36 563.47,368.36
			568.81,368.36 568.81,350.71 577.9,350.71 577.9,353.71	"
          />
          <ControlSurface
            x={571.81}
            y={353.61}
            width={66.09}
            height={30.77}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="637.9,353.71 637.84,384.49 640.84,384.49 640.9,370.36 646.25,370.36 646.25,368.36 640.9,368.36
		640.9,350.71 631.82,350.71 631.82,353.71"
          />
        </g>
      )}
    </>
  );
};
