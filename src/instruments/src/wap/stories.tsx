import React from "react";
import { WAP } from "./wap";

enum EDisplayModes {
  OFF,
  ON
}

export default {
  title: "Warning and Caution Annunciation Panel",
  component: WAP,
  argTypes: {
    displayMode: {
      defaultValue: EDisplayModes.ON,
      options: Object.keys(EDisplayModes),
      control: { type: "select" }
    }
  }
};

export const _WarningAndCautionAnnunciationPanel = (args) => (
  <>
    <WAP {...args} />
  </>
);
