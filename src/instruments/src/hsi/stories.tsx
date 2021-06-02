import React, { useState } from "react";
import { HSI } from "./hsi";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "LCDS/Heading Select Indicator",
  component: HSI,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    headingDegrees: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 359, step: 1 }
    }
  }
};

export const _HeadingSelectIndicator = (args) => (
  <>
    <HSI {...args} />
  </>
);
