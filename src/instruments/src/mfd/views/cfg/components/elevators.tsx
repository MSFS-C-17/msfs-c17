import React from "react";
import { SVGPolygon } from "../../../styles";
import { colors } from "../../../../../../globals/colours";
import { ControlSurface, EControlSurfaceDirections } from "./control-surface";

export type TElevatorsProps = {
  scaleValue: number;
};

export const Elevators: React.FC<TElevatorsProps> = ({ scaleValue }) => {
  if (scaleValue > 0) {
    return (
      <>
        <g id="elevator-left-up">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="322.93,161.7 323,189.47 320,189.47 319.93,175.58 314.59,175.58 314.59,173.58 319.93,173.58
		319.93,158.7 329.01,158.7 329.01,161.7"
          />
          <ControlSurface
            x={323.03}
            y={161.7}
            width={51.66}
            height={27.77}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="374.69,161.7 374.62,189.47 377.62,189.47 377.69,175.58 383.03,175.58 383.03,173.58 377.69,173.58
		377.69,158.7 368.61,158.7 368.61,161.7"
          />
        </g>

        <g id="elevator-right-up">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="422.03,161.7 422.1,189.47 419.1,189.47 419.03,175.58 413.69,175.58 413.69,173.58 419.03,173.58
		419.03,158.7 428.11,158.7 428.11,161.7"
          />
          <ControlSurface
            x={422.12}
            y={161.7}
            width={51.66}
            height={27.77}
            direction={EControlSurfaceDirections.UP}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="473.79,161.7 473.72,189.47 476.72,189.47 476.79,175.58 482.13,175.58 482.13,173.58 476.79,173.58
		476.79,158.7 467.7,158.7 467.7,161.7"
          />
        </g>
      </>
    );
  } else if (scaleValue < 0) {
    return (
      <>
        <g id="elevator-left-down">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="322.98,217.25 323.05,189.47 320.05,189.47 319.98,203.36 314.64,203.36 314.64,205.36 319.98,205.36
		319.98,220.25 329.06,220.25 329.06,217.25"
          />
          <ControlSurface
            x={322.98}
            y={189.47}
            width={51.66}
            height={27.77}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="374.74,217.25 374.67,189.47 377.67,189.47 377.74,203.36 383.08,203.36 383.08,205.36 377.74,205.36
		377.74,220.25 368.65,220.25 368.65,217.25"
          />
        </g>
        <g id="elevator-right-down">
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="422.08,217.25 422.14,189.47 419.14,189.47 419.08,203.36 413.73,203.36 413.73,205.36 419.08,205.36
		419.08,220.25 428.16,220.25 428.16,217.25"
          />
          <ControlSurface
            x={422.08}
            y={189.47}
            width={51.66}
            height={27.77}
            direction={EControlSurfaceDirections.DOWN}
            scaleValue={scaleValue}
          />
          <SVGPolygon
            color={colors.DISPLAY_WHITE}
            points="473.83,217.25 473.77,189.47 476.77,189.47 476.83,203.36 482.18,203.36 482.18,205.36 476.83,205.36
		476.83,220.25 467.75,220.25 467.75,217.25"
          />
        </g>
      </>
    );
  } else {
    return <></>;
  }
};
