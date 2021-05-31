import React from "react";
import { AltSI } from "./altsi";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Altitude Select Indicator",
  component: AltSI,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    value: {
      defaultValue: 0,
      control: { type: "number" }
    }
  }
};

export const _AltitudeSelectIndicator = (args) => (
  <>
    <AltSI {...args} />
  </>
);
