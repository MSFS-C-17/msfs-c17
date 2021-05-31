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
      control: { type: "number" }
    }
  }
};

export const _HeadingSelectIndicator = (args) => (
  <>
    <HSI {...args} />
  </>
);
