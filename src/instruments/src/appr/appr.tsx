import React from "react";
import { APPRContainer, DigitsWrapper, BigDigits } from "./styles";
import * as LCD from "../components/lcd-common";
import LCD14 from "../../../globals/fonts/lcd14";

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
      <LCD14 />
      <APPRContainer>
        {displayMode === EDisplayModes.ON && (
          <DigitsWrapper>
            <LCD.DigitsOn>
              <BigDigits>{deckAngle * 10}</BigDigits>
            </LCD.DigitsOn>
            <LCD.DigitsOff>
              <BigDigits>88</BigDigits>
            </LCD.DigitsOff>
            <LCD.Decimal />
          </DigitsWrapper>
        )}
      </APPRContainer>
    </>
  );
};
