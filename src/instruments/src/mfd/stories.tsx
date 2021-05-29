import React, { useState } from "react";
import { MFD, EDisplayModes, EMFDViews, TMFDProps } from "./mfd";
import { TCFGProps } from "./views/cfg";

export default {
  title: "Displays/Index",
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
    }
  }
};

export const _MFD = (args) => {
  const cfgValues: TCFGProps = {
    rudderPosition: 0,
    aileronPosition: 0,
    flapPosition: 0,
    elevatorPosition: 0,
    spoilerPosition: 0,
    slatPosition: 0,
    flapIndex: 0,
    aileronTrim: 0,
    rudderTrim: 0,
    stabiliserTrim: 0,
    gearPosition: 1,
    brakeTemperature: 30
  };

  const mfdProps: TMFDProps = {
    displayMode: args.displayMode,
    displayView: args.displayView,
    brightness: args.brightness,
    contrast: args.contrast,
    cfgValues: cfgValues
  };

  return (
    <>
      <MFD {...mfdProps} />
    </>
  );
};
