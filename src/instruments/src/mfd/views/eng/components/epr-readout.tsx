import React from "react";
import { SVGText } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TEPRReadoutProps = {
  engine1PressureRatio: number;
  engine2PressureRatio: number;
  engine3PressureRatio: number;
  engine4PressureRatio: number;
};

export const EPRReadout: React.FC<TEPRReadoutProps> = ({
  engine1PressureRatio,
  engine2PressureRatio,
  engine3PressureRatio,
  engine4PressureRatio
}) => {
  return (
    <>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 365.6166 675.7679)"
      >
        EPR
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 180 678.3588)"
        textAnchor="end"
      >
        {engine1PressureRatio.toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 315 678.3588)"
        textAnchor="end"
      >
        {engine2PressureRatio.toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 481 678.3588)"
      >
        {engine3PressureRatio.toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 617 678.3588)"
      >
        {engine4PressureRatio.toFixed(1)}
      </SVGText>
    </>
  );
};
