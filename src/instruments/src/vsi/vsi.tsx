import React from "react";
import DSEG14ClassicRegular from "../../../globals/fonts/dseg14-classic-regular";
import { VSIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";

export type THSIProps = {
  displayMode: EDisplayModes;
  value: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const VSI: React.FC<THSIProps> = ({
  displayMode = EDisplayModes.ON,
  value = 0
}) => {
  // let displayValue: string = value ? value.toString() : "";
  let verticalDirection;
  if (value > 0) {
    verticalDirection = "UP";
  } else {
    verticalDirection = "DN";
  }

  const decimalise = Math.abs(value) / 1000;
  const hundredsValue =
    Math.floor((decimalise - Math.floor(decimalise)) * 10) * 100;
  const thousandsValue = Math.floor(decimalise);

  return (
    <>
      <DSEG14ClassicRegular />
      <VSIContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>
                {verticalDirection}
                {thousandsValue}
              </LCD.BigDigits>
              <LCD.SmallDigits>{hundredsValue}</LCD.SmallDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <LCD.BigDigits>~~~</LCD.BigDigits>
              <LCD.SmallDigits>~~~</LCD.SmallDigits>
            </LCD.DigitsOff>
          </DigitsWrapper>
        )}
      </VSIContainer>
    </>
  );
};
