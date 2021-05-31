import React from "react";
import { HUD } from "./hud";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "HUD/Default",
  component: HUD,
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

export const _HUD = (args) => (
  <>
    <HUD {...args} />
  </>
);
