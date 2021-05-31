import React from "react";
import { WCAP } from "./wcap";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "Warning and Caution Annunciation Panel",
  component: WCAP,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    deckAngle: {
      defaultValue: 0.0,
      control: { type: "range", min: 0, max: 9.9, step: 0.1 }
    }
  }
};

export const _WarningAndCautionAnnunciationPanel = (args) => (
  <>
    <WCAP {...args} />
  </>
);
