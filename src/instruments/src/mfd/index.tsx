import React from "react";
import PFD from "./views/pfd";
import ND from "./views/nd";
import PPI from "./views/ppi";
import ENG from "./views/eng";
import CFG from "./views/cfg";
import { MFDContainer } from "./styles";
import { GlobalStyles } from "../../../globals/global-styles";

export enum EMFDViews {
  PFD,
  ND,
  PPI,
  ENG,
  CFG
}

export type MFDProps = {
  displayView: EMFDViews;
};

export const MFD: React.FC<MFDProps> = ({ displayView }) => {
  console.log(displayView);

  const currentView = () => {
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
        return <CFG />;
    }
  };

  return <MFDContainer>{currentView()}</MFDContainer>;
};

export default MFD;
