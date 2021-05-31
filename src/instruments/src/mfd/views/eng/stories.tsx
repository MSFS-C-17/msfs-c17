import React, { useState } from "react";
import ENG from "./index";
import { EReverserStatus } from "./components/reverser-status";

export default {
  title: "Displays/Index/ENG",
  component: ENG,
  argTypes: {
    engine1Rating: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine1N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: .1 }
    },
    engine2N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: .1 }
    },
    engine3N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: .1 }
    },
    engine4N1RPM: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 100, step: .1 }
    },
    engine1ReverserStatus: {
      defaultValue: EReverserStatus.DEPLOYED,
      control: { type: "select", options: ["STOWED", "UNLOCKED", "DEPLOYED"] }
    },
    engine2Rating: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine2ReverserStatus: {
      defaultValue: EReverserStatus.DEPLOYED,
      control: { type: "select", options: ["STOWED", "UNLOCKED", "DEPLOYED"] }
    },
    engine3Rating: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine3ReverserStatus: {
      defaultValue: EReverserStatus.DEPLOYED,
      control: { type: "select", options: ["STOWED", "UNLOCKED", "DEPLOYED"] }
    },
    engine4Rating: {
      defaultValue: 0,
      control: { type: "range", min: 0, max: 1.85, step: 0.01 }
    },
    engine4ReverserStatus: {
      defaultValue: EReverserStatus.DEPLOYED,
      control: { type: "select", options: ["STOWED", "UNLOCKED", "DEPLOYED"] }
    }
  }
};

export const _ENG = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <ENG {...args} />
  </div>
);
