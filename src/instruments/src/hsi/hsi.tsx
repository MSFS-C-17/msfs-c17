import React from "react";
import { HSIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";
import DSEG14ClassicRegular from "../../../globals/fonts/dseg14-classic-regular";
import { pad } from "../../utils/number-padding";

export type THSIProps = {
  displayMode: EDisplayModes;
  headingDegrees: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const HSI: React.FC<THSIProps> = ({
  displayMode = EDisplayModes.ON,
  headingDegrees = 0
}) => {
  let displayValue: string = headingDegrees ? headingDegrees.toString() : "";
  displayValue += "M";

  return (
    <>
      <DSEG14ClassicRegular />
      <HSIContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>{pad(displayValue, 4)}</LCD.BigDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <LCD.BigDigits>8888</LCD.BigDigits>
            </LCD.DigitsOff>
          </DigitsWrapper>
        )}
      </HSIContainer>
    </>
  );
};
