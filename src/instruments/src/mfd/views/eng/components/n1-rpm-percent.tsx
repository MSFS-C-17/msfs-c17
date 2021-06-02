import React from "react";
import { SVGText } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TN1RPMPercentProps = {
  engine1N1RPM: number;
  engine2N1RPM: number;
  engine3N1RPM: number;
  engine4N1RPM: number;
};

export const N1RPMPercent: React.FC<TN1RPMPercentProps> = ({
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM
}) => {
  return (
    <>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 380 716.2592)"
      >
        N1
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 352 749.0988)"
      >
        %RPM
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 180 736.1696)"
        textAnchor="end"
      >
        {(engine1N1RPM * 100).toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 315 736.1694)"
        textAnchor="end"
      >
        {(engine2N1RPM * 100).toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 481 736.1694)"
      >
        {(engine3N1RPM * 100).toFixed(1)}
      </SVGText>
      <SVGText
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 617 736.1694)"
      >
        {(engine4N1RPM * 100).toFixed(1)}
      </SVGText>
    </>
  );
};
