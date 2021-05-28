import React, { useState } from "react";
import CFG from "./index";

export default {
  title: "Displays/MFD/CFG",
  component: CFG,
  argTypes: {
    ailerons: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    aileronTrim: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    flaps: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 1 }
    },
    spoilers: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 1 }
    },
    elevators: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    stabiliserTrim: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    rudder: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    rudderTrim: {
      defaultValue: 0,
      control: { type: "range", min: -100, max: 100, step: 1 }
    },
    slats: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 1 }
    }
  }
};

export const _CFG = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <CFG {...args} />
  </div>
);
