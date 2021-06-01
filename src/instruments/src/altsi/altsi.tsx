import React from "react";
import { AltSIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";
import LCD14 from "../../../globals/fonts/lcd14";

export type TAltSIProps = {
  displayMode: EDisplayModes;
  value: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const AltSI: React.FC<TAltSIProps> = ({
  displayMode = EDisplayModes.ON,
  value = 0
}) => {
  let displayValue: string = value ? value.toString() : "";

  const decimalise = value / 1000;
  const hundredsValue =
    Math.floor((decimalise - Math.floor(decimalise)) * 10) * 100;
  const thousandsValue = Math.floor(decimalise);

  return (
    <>
      <LCD14 />
      <AltSIContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>{thousandsValue}</LCD.BigDigits>
              <LCD.SmallDigits>{hundredsValue}</LCD.SmallDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <LCD.BigDigits>88</LCD.BigDigits>
              <LCD.SmallDigits>888</LCD.SmallDigits>
            </LCD.DigitsOff>
          </DigitsWrapper>
        )}
      </AltSIContainer>
    </>
  );
};
