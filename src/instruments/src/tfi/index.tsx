import React from "react";
import { TFIContainer, DigitsOn, DigitsOff } from "./styles";

export type TTFIProps = {
  displayMode: EDisplayModes;
  fuelAmount: number;
};

enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const TFI: React.FC<TTFIProps> = ({ displayMode, fuelAmount = 0 }) => {
  return (
    <TFIContainer>
      {displayMode === EDisplayModes.ON && (
        <>
          <DigitsOn>{fuelAmount}</DigitsOn>
          <DigitsOff>000000</DigitsOff>
        </>
      )}
    </TFIContainer>
  );
};

export default TFI;
