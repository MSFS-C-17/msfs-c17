import React from "react";
import { SVGRect } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export enum EControlSurfaceDirections {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

type TControlSurfaceProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  direction: EControlSurfaceDirections;
  scaleValue: number;
};

export const ControlSurface: React.FC<TControlSurfaceProps> = (props) => {
  const { x, y, width, height, direction, scaleValue } = props;
  const absScaleValue = Math.abs(scaleValue);
  let args = { x, y, width, height };
  switch (direction) {
    case EControlSurfaceDirections.UP: {
      args.height = height * absScaleValue;
      args.y = y + (height - args.height);
      break;
    }
    case EControlSurfaceDirections.DOWN: {
      args.height = height * absScaleValue;
      break;
    }
    case EControlSurfaceDirections.LEFT: {
      args.width = width * absScaleValue;
      args.x = x + (width - args.width);
      break;
    }
    case EControlSurfaceDirections.RIGHT: {
      args.width = width * absScaleValue;
      break;
    }
  }
  return <SVGRect color={colors.DISPLAY_GREEN} {...args} />;
};
