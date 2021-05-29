import React, { useState } from "react";
import TQI from "./tqi";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Tank Quantity Indicator",
  component: TQI,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    fuelAmount: {
      defaultValue: 100,
      control: { type: "range", min: 0, max: 56000, step: 1 }
    }
  }
};

export const _TankQuantityIndicator = (args) => (
  <>
    <TQI {...args} />
  </>
);
