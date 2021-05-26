import React from "react";
import PFD from "./views/pfd";
import ND from "./views/nd";
import PPI from "./views/ppi";
import ENG from "./views/eng";
import CFG from "./views/cfg";
import { MFDContainer } from "./styles";

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

export type MFDProps = {
  displayView: EMFDViews;
  displayMode: EDisplayModes;
  brightness: number;
  contrast: number;
  ailerons: number;
  aileronTrim: number;
  flaps: number;
  spoilers: number;
  elevators: number;
  stabiliserTrim: number;
  rudder: number;
  rudderTrim: number;
  slats: number;
};

export const MFD: React.FC<MFDProps> = ({
  displayView = EMFDViews.CFG,
  displayMode = EDisplayModes.OFF,
  brightness = 0,
  contrast = 0,
  ailerons,
  aileronTrim,
  flaps,
  spoilers,
  elevators,
  stabiliserTrim,
  rudder,
  rudderTrim,
  slats
}) => {
  const currentView = () => {
    console.log("--->", displayMode);
    if (displayMode === EDisplayModes.OFF) return <></>;
    switch (displayView) {
      case EMFDViews.PFD:
        return <PFD />;
      case EMFDViews.ND:
        return <ND />;
      case EMFDViews.PPI:
        return <PPI />;
      case EMFDViews.ENG:
        return <ENG />;
      case EMFDViews.CFG:
        return (
          <CFG
            ailerons={ailerons}
            flaps={flaps}
            spoilers={spoilers}
            elevators={elevators}
            rudder={rudder}
            rudderTrim={rudderTrim}
            stabiliserTrim={stabiliserTrim}
            aileronTrim={aileronTrim}
            slats={slats}
          />
        );
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

export default MFD;
