import React, { useState } from "react";
import TQI from "./index";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "Tank Quantity Indicator",
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

export const _TQI = (args) => (
  <>
    <TQI {...args} />
  </>
);
