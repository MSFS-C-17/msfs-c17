import React from "react";
import { HSIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";
import LCD14 from "../../../globals/fonts/lcd14";

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
      <LCD14 />
      <HSIContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>{displayValue}</LCD.BigDigits>
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
