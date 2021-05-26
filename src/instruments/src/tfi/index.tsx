import React from "react";
import { TFIContainer } from "./styles";

export type TTFIProps = {
  displayMode: EDisplayModes;
  fuelAmount: number;
};

enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const TFI: React.FC<TTFIProps> = ({ displayMode, fuelAmount = 0 }) => {
  if (displayMode === EDisplayModes.OFF) return <></>;
  return <TFIContainer>{fuelAmount}</TFIContainer>;
};

export default TFI;
