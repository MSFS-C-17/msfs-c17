import React from "react";
import { ControlSurface, EControlSurfaceDirections } from "./control-surface";
import { SVGPolygon } from "../styles";
import { colors } from "../../../../../../globals/colours";

export type TFlapsProps = {
  scaleValue: number;
};
export const Flaps: React.FC<TFlapsProps> = ({ scaleValue }) => {
  if (scaleValue > 0) {
    return (
      <>
        <g id="flaps-left">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="256.57,412.9 247.09,412.9 247.09,387.13 250.09,387.13 250.09,409.9 256.57,409.9 	"
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="349.58,412.9 340.09,412.9 340.09,409.9 346.58,409.9 346.58,387.13 349.58,387.13 	"
          />
          <ControlSurface
            x={250.09}
            y={387.13}
            width={42.25}
            height={22.76}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />

          <ControlSurface
            x={304.33}
            y={387.13}
            width={42.25}
            height={22.76}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
        </g>
        <g id="flaps-right">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="456.48,412.9 446.99,412.9 446.99,387.13 449.99,387.13 449.99,409.9 456.48,409.9 	"
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="549.48,412.9 540,412.9 540,409.9 546.48,409.9 546.48,387.13 549.48,387.13 	"
          />
          <ControlSurface
            x={449.99}
            y={387.13}
            width={42.25}
            height={22.76}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={504.23}
            y={387.13}
            width={42.25}
            height={22.76}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
        </g>
      </>
    );
  } else {
    return <></>;
  }
};
