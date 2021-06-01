import React from "react";
import { TFIContainer, DigitsOn, DigitsOff } from "./styles";
import TFILCDMonoFont from "../../../globals/fonts/tfi-lcd-mono";

export type TTFIProps = {
  displayMode: EDisplayModes;
  fuelAmount: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const TFI: React.FC<TTFIProps> = ({ displayMode, fuelAmount = 0 }) => {
  return (
    <>
      <TFILCDMonoFont />
      <TFIContainer>
        {displayMode === EDisplayModes.ON && (
          <>
            <DigitsOn>{fuelAmount}</DigitsOn>
            <DigitsOff>000000</DigitsOff>
          </>
        )}
      </TFIContainer>
    </>
  );
};
