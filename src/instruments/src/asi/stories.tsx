import React, { useState } from "react";
import { ASI, EMode, EUnit } from "./asi";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Airspeed Select Indicator",
  component: ASI,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    mode: {
      defaultValue: EMode.THRUST,
      options: Object.keys(EMode),
      control: { type: "select" }
    },
    unit: {
      defaultValue: EUnit.MACH,
      options: Object.keys(EUnit),
      control: { type: "select" }
    },
    value: {
      defaultValue: 0.0,
      control: { type: "number" }
    }
  }
};

export const _AirspeedSelectIndicator = (args) => (
  <>
    <ASI {...args} />
  </>
);
