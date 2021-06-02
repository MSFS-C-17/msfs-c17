import React from "react";
import { WAPContainer } from "./styles";

export enum TDisplayMode {
  ON = "ON",
  OFF = "OFF"
}

export type TWAPProps = { displayMode: TDisplayMode };

//WARNING AND CAUTION ANNUNCIATION PANEL
export const WAP: React.FC<TWAPProps> = ({ displayMode }) => {
  return <WAPContainer>WAP Test</WAPContainer>;
};
