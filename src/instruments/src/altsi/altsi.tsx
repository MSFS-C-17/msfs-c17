import React from "react";
import { AltSIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";
import DSEG14ClassicRegular from "../../../globals/fonts/dseg14-classic-regular";
import { pad } from "../../utils/number-padding";

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
      <DSEG14ClassicRegular />
      <AltSIContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>
                {thousandsValue > 0 && thousandsValue}
              </LCD.BigDigits>
              <LCD.SmallDigits>{pad(hundredsValue, 3)}</LCD.SmallDigits>
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
