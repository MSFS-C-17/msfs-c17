import React from "react";
import { APPRContainer, DigitsWrapper, BigDigits } from "./styles";
import * as LCD from "../components/lcd-common";
import DSEG14ClassicRegular from "../../../globals/fonts/dseg14-classic-regular";

export type TAPPRProps = {
  displayMode: EDisplayModes;
  deckAngle: number;
};

export enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export const APPR: React.FC<TAPPRProps> = ({
  displayMode = EDisplayModes.ON,
  deckAngle = 0
}) => {
  return (
    <>
      <DSEG14ClassicRegular />
      <APPRContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <BigDigits>{deckAngle > 0 ? deckAngle : "0.0"}</BigDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <BigDigits>88</BigDigits>
            </LCD.DigitsOff>
          </DigitsWrapper>
        )}
      </APPRContainer>
    </>
  );
};
