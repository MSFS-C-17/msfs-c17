import React from "react";
import { ControlSurface, EControlSurfaceDirections } from "./control-surface";
import { SVGPolygon } from "../styles";
import { colors } from "../../../../../../globals/colours";

export type TRudderProps = {
  scaleValue: number;
};

export const Rudder: React.FC<TRudderProps> = ({ scaleValue }) => {
  if (scaleValue > 0) {
    return (
      <>
        <g id="rudder-right">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="427.11,323.25 430.11,323.25 430.11,331.48 398.36,331.48 398.36,328.48 427.11,328.48"
          />
          <ControlSurface
            x={398.36}
            y={282.03}
            width={28.75}
            height={46.45}
            direction={EControlSurfaceDirections.RIGHT}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={398.36}
            y={230.47}
            width={28.75}
            height={46.45}
            direction={EControlSurfaceDirections.RIGHT}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="427.11,235.71 430.11,235.71 430.11,227.47 398.36,227.47 398.36,230.47 427.11,230.47"
          />
        </g>
      </>
    );
  } else if (scaleValue < 0) {
    return (
      <>
        <g id="rudder-left">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="369.61,235.71 366.61,235.71 366.61,227.47 398.36,227.47 398.36,230.47 369.61,230.47"
          />
          <ControlSurface
            x={369.61}
            y={282.03}
            width={28.75}
            height={46.45}
            direction={EControlSurfaceDirections.LEFT}
            scaleValue={scaleValue}
          />
          <ControlSurface
            x={369.61}
            y={230.47}
            width={28.75}
            height={46.45}
            direction={EControlSurfaceDirections.LEFT}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="369.61,323.25 366.61,323.25 366.61,331.48 398.36,331.48 398.36,328.48 369.61,328.48"
          />
        </g>
      </>
    );
  } else {
    return <></>;
  }
};
