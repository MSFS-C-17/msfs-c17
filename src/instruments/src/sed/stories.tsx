import React from "react";
import { ESEDMode, ESEDSelect, SED } from "./sed";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "Displays/Standby Engine Display",
  component: SED,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    },
    select: {
      defaultValue: ESEDSelect.OFF,
      options: Object.keys(ESEDSelect),
      control: { type: "select" }
    },
    mode: {
      defaultValue: null,
      options: Object.keys(ESEDMode),
      control: { type: "select" }
    },
    setRating: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine1N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine2N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine3N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine4N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine1N2RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine2N2RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine3N2RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine4N2RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: 0.1 }
    },
    engine1ExhaustGasTemperature: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1000, step: 1 }
    },
    engine2ExhaustGasTemperature: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1000, step: 1 }
    },
    engine3ExhaustGasTemperature: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1000, step: 1 }
    },
    engine4ExhaustGasTemperature: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1000, step: 1 }
    },
    engine1PressureRatio: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine2PressureRatio: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine3PressureRatio: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine4PressureRatio: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    }
  }
};

export const _StandbyEngineDisplay = (args) => (
  <>
    <SED {...args} />
  </>
);
