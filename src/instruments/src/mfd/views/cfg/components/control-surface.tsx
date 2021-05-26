import React from "react";
import { SVGRect } from "../styles";
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
  let args = { x, y, width, height };
  switch (direction) {
    case EControlSurfaceDirections.UP: {
      args.height = (height / 100) * Math.abs(scaleValue);
      args.y = y + (height - args.height);
      break;
    }
    case EControlSurfaceDirections.DOWN: {
      args.height = (height / 100) * Math.abs(scaleValue);
      break;
    }
    case EControlSurfaceDirections.LEFT: {
      args.width = (width / 100) * Math.abs(scaleValue);
      args.x = x + (width - args.width);
      break;
    }
    case EControlSurfaceDirections.RIGHT: {
      args.width = (width / 100) * Math.abs(scaleValue);
      break;
    }
  }
  return <SVGRect color={colors.DISPLAY_GREEN} {...args} />;
};
