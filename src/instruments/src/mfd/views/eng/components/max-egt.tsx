import React from "react";
import { SVGText } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TMaxEGT = {
  engine1ExhaustGasTemperature: number;
  engine2ExhaustGasTemperature: number;
  engine3ExhaustGasTemperature: number;
  engine4ExhaustGasTemperature: number;
};

export const MaxEGT: React.FC<TMaxEGT> = ({
  engine1ExhaustGasTemperature,
  engine2ExhaustGasTemperature,
  engine3ExhaustGasTemperature,
  engine4ExhaustGasTemperature
}) => {
  const maxEGT = Math.max(
    engine1ExhaustGasTemperature,
    engine2ExhaustGasTemperature,
    engine3ExhaustGasTemperature,
    engine4ExhaustGasTemperature
  );

  let egtColour = colors.DISPLAY_BLACK;
  if (maxEGT > 655) {
    egtColour = colors.DISPLAY_RED;
  } else if (maxEGT > 625) {
    egtColour = colors.DISPLAY_YELLOW;
  }

    return (
      <>
        <SVGText
          color={egtColour}
          transform="matrix(1 0 0 1 522.1137 190.684)"
        >
          MAX EGT
        </SVGText>
        <SVGText
          color={egtColour}
          transform="matrix(1 0 0 1 694.1538 190.6837)"
        >
          {maxEGT}°C
        </SVGText>
      </>
    );
};
