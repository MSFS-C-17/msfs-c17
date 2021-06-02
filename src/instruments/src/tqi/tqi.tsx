import React from "react";
import { TQIContainer, DigitsOn, DigitsOff } from "./styles";
import DSEG7ClassicRegular from "../../../globals/fonts/dseg7-classic-regular";

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
      <DSEG7ClassicRegular />
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
