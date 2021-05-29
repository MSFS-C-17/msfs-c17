import React, { useState } from "react";
import { TFI } from "./tfi";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Total Fuel Indicator",
  component: TFI,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    fuelAmount: {
      defaultValue: 100,
      control: { type: "range", min: 0, max: 181054, step: 1 }
    }
  }
};

export const _TotalFuelIndicator = (args) => (
  <>
    <TFI {...args} />
  </>
);
