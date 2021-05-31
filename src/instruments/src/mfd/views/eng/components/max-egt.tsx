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

  let egtColor = colors.DISPLAY_BLACK;
  if (maxEGT > 655) {
    egtColor = colors.DISPLAY_RED;
  } else if (maxEGT > 625) {
    egtColor = colors.DISPLAY_YELLOW;
  }

  const fiveMinutes = 300000;
  let timer = 0;
  let timerStatus;
  let timerColor;
  let displayTime;
  if (timer > fiveMinutes * 2 - 1) {
    timerStatus = "TIME OVER";
    timerColor = colors.DISPLAY_RED;
    displayTime = timer - fiveMinutes;
  } else if (timer > fiveMinutes) {
    timerStatus = "TIME OVER";
    timerColor = colors.DISPLAY_YELLOW;
    displayTime = timer - fiveMinutes;
  } else if (timer > 0) {
    timerStatus = "TIME REM";
    timerColor = colors.DISPLAY_GREEN;
    displayTime = fiveMinutes - timer;
  } else {
    timerColor = colors.DISPLAY_BLACK;
  }

  const time: string = (() => {
    const minutes = Math.floor(displayTime / 60000);
    const seconds = ((displayTime % 60000) / 1000).toFixed(0);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  })();

  return (
    <>
      <SVGText
        textAnchor="end"
        color={egtColor}
        transform="matrix(1 0 0 1 670 190)"
      >
        MAX EGT
      </SVGText>
      <SVGText
        textAnchor="end"
        color={egtColor}
        transform="matrix(1 0 0 1 775 190)"
      >
        {maxEGT}°C
      </SVGText>

      <SVGText
        color={timerColor}
        textAnchor="end"
        transform="matrix(1 0 0 1 670 220)"
      >
        {timerStatus}
      </SVGText>
      <SVGText
        textAnchor="end"
        color={timerColor}
        transform="matrix(1 0 0 1 775 220)"
      >
        {time}
      </SVGText>
    </>
  );
};
