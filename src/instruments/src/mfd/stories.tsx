import React, { useState } from "react";
import MFD, { EDisplayModes, EMFDViews } from "./index";

export default {
  title: "MFD",
  component: MFD,
  argTypes: {
    displayView: {
      options: Object.keys(EMFDViews),
      mapping: EMFDViews,
      control: { type: "select" }
    },
    displayMode: {
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    brightness: {
      defaultValue: 100,
      control: { type: "range", min: 0, max: 100, step: 1 }
    },
    contrast: {
      defaultValue: 100,
      control: { type: "range", min: 0, max: 100, step: 1 }
    },
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

export const _MFD = (args) => (
  <>
    <MFD {...args} />
  </>
);
