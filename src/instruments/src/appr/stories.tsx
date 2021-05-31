import React, { useState } from "react";
import { APPR } from "./appr";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Approach Indicator",
  component: APPR,
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

export const _ApproachIndicator = (args) => (
  <>
    <APPR {...args} />
  </>
);
