import React from "react";
import PFD from "./views/pfd";
import ND from "./views/nd";
import PPI from "./views/ppi";
import ENG from "./views/eng";
import CFG, { TCFGProps } from "./views/cfg";
import { MFDContainer } from "./styles";
import { EReverserStatus } from "./views/eng/components/reverser-status";

export enum EMFDViews {
  OFF,
  PFD,
  ND,
  PPI,
  ENG,
  CFG
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
  cfgValues: TCFGProps;
};

export const MFD: React.FC<TMFDProps> = ({
  displayView = EMFDViews.ENG,
  displayMode = EDisplayModes.DAY,
  brightness = 100,
  contrast = 100,
  cfgValues
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
        return (
          <ENG
            engine1Rating={1.5}
            engine2Rating={1.5}
            engine3Rating={1.5}
            engine4Rating={1.5}
            engine1ReverserStatus={EReverserStatus.DEPLOYED}
            engine2ReverserStatus={EReverserStatus.UNLOCKED}
            engine3ReverserStatus={EReverserStatus.UNLOCKED}
            engine4ReverserStatus={EReverserStatus.DEPLOYED}
          />
        );
      case EMFDViews.CFG:
        return <CFG {...cfgValues} />;
    }
  };

  return (
    <MFDContainer
      displayMode={displayMode}
      brightness={brightness}
      contrast={contrast}
    >
      {currentView()}
    </MFDContainer>
  );
};
