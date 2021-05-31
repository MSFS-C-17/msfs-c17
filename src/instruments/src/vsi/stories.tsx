import React, { useState } from "react";
import { VSI } from "./vsi";

enum EDisplayModes {
  OFF = "OFF",
  ON = "ON"
}

export default {
  title: "LCDS/Vertical Speed Indicator",
  component: VSI,
  argTypes: {
    displayMode: {
      defaultValue: "ON",
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    value: {
      defaultValue: 2500,
      control: { type: "number" }
    }
  }
};

export const _VerticalSpeedIndicator = (args) => (
  <>
    <VSI {...args} />
  </>
);
