import React from "react";
import { TQIContainer, DigitsOn, DigitsOff } from "./styles";
import TFILCDMonoFont from "../../../globals/fonts/tfi-lcd-mono";

export type TQIProps = {
  displayMode: EDisplayModes;
  fuelAmount: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const TQI: React.FC<TQIProps> = ({ displayMode, fuelAmount = 0 }) => {
  return (
    <>
      <TFILCDMonoFont />
      <TQIContainer>
        {displayMode === EDisplayModes.ON && (
          <>
            <DigitsOn>{fuelAmount}</DigitsOn>
            <DigitsOff>00000</DigitsOff>
          </>
        )}
      </TQIContainer>
    </>
  );
};

export default TQI;
