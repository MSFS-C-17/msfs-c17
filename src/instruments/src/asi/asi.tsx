import React from "react";
import { ASIContainer, DigitsWrapper } from "./styles";
import * as LCD from "../components/lcd-common";
import LCD14 from "../../../globals/fonts/lcd14";

export type TASIProps = {
  displayMode: EDisplayModes;
  mode: EMode;
  unit: EUnit;
  value: number;
};

export enum EMode {
  THRUST = "THRUST",
  PITCH = "PITCH"
}

export enum EUnit {
  MACH = "MACH",
  IAS = "IAS"
}

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const ASI: React.FC<TASIProps> = ({
  displayMode = EDisplayModes.ON,
  value = 0,
  unit,
  mode
}) => {
  let displayValue: string = value ? value.toString() : "";

  if (mode === EMode.THRUST) {
    if (unit === EUnit.MACH) {
      displayValue += "MCH";
    }
    if (unit === EUnit.IAS) {
      displayValue += "IAS";
    }
  }

  if (mode === EMode.PITCH) {
    displayValue += "PCH";
  }

  return (
    <>
      <ASIContainer>
        <LCD14 />
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <LCD.BigDigits>{displayValue}</LCD.BigDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <LCD.BigDigits>888888</LCD.BigDigits>
            </LCD.DigitsOff>
          </DigitsWrapper>
        )}
      </ASIContainer>
    </>
  );
};
