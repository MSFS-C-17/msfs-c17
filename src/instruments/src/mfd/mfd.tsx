import React from "react";
import PFD from "./views/pfd";
import ND from "./views/nd";
import PPI from "./views/ppi";
import { EngScreen } from "./views/eng";
import { CfgScreen } from "./views/cfg";
import { MFDContainer } from "./styles";
import DYMOSymbols from "../../../globals/fonts/dymo-symbols";

export enum EMFDViews {
  PFD = "PFD",
  ND = "ND",
  PPI = "PPI",
  ENG = "ENG",
  CFG = "CFG"
}

export enum EDisplayModes {
  DAY = "DAY",
  NIGHT = "NIGHT",
  OFF = "OFF"
}

export type TMFDProps = {
  displayView: EMFDViews;
  displayMode: EDisplayModes;
  brightness: number;
  contrast: number;
};

export const MFD: React.FC<TMFDProps> = ({
  displayView = EMFDViews.CFG,
  displayMode = EDisplayModes.DAY,
  brightness = 100,
  contrast = 100
}) => {
  const currentView = () => {
    if (displayMode === EDisplayModes.OFF) return <></>;
    switch (displayView) {
      case EMFDViews.PFD:
        return <PFD />;
      case EMFDViews.ND:
        return <ND />;
      case EMFDViews.PPI:
        return <PPI />;
      case EMFDViews.ENG:
        return <EngScreen />;
      case EMFDViews.CFG:
        return <CfgScreen />;
    }
  };

  return (
    <>
      <DYMOSymbols />

      <MFDContainer
        displayMode={displayMode}
        brightness={brightness}
        contrast={contrast}
      >
        {currentView()}
      </MFDContainer>
    </>
  );
};
