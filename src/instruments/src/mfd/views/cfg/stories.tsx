import React, { useState } from "react";
import CFG, { TCFGProps } from "./index";

export default {
  title: "Displays/MFD/CFG",
  component: CFG,
  argTypes: {
    aileronPosition: {
      defaultValue: 0,
      control: { type: "range", min: -1, max: 1, step: 0.01 }
    },
    aileronTrim: {
      defaultValue: 0,
      control: { type: "range", min: -0.17, max: 0.17, step: 0.01 }
    },
    flapPosition: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1, step: 0.01 }
    },
    spoilerPosition: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1, step: 0.01 }
    },
    elevatorPosition: {
      defaultValue: 0,
      control: { type: "range", min: -1, max: 1, step: 0.01 }
    },
    stabiliserTrim: {
      defaultValue: 0,
      control: { type: "range", min: -0.09, max: 0.27, step: 0.01 }
    },
    rudderPosition: {
      defaultValue: 0,
      control: { type: "range", min: -1, max: 1, step: 0.01 }
    },
    rudderTrim: {
      defaultValue: 0,
      control: { type: "range", min: -0.17, max: 0.17, step: 0.01 }
    },
    slatPosition: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1, step: 0.01 }
    },
    flapIndex: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 1 }
    },
    gearPosition: {
      defaultValue: 2,
      options: [0, 1, 2],
      control: { type: "select" }
    },
    brakeTemperature: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1000, step: 1 }
    }
  }
};

export const _CFG = (args) => {
  const cfgValues: TCFGProps = {
    rudderPosition: args.rudderPosition,
    aileronPosition: args.aileronPosition,
    flapPosition: args.flapPosition,
    elevatorPosition: args.elevatorPosition,
    spoilerPosition: args.spoilerPosition,
    slatPosition: args.slatPosition,
    flapIndex: args.flapIndex,
    aileronTrim: args.aileronTrim,
    rudderTrim: args.rudderTrim,
    stabiliserTrim: args.stabiliserTrim,
    gearPosition: args.gearPosition,
    brakeTemperature: args.brakeTemperature
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <CFG {...cfgValues} />
    </div>
  );
};
