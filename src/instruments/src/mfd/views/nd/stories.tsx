import React from "react";
import ND from "./index";

export default {
  title: "Displays/MFD/ND",
  component: ND,
  argTypes: {
    heading: {
      defaultValue: 0,
      control: { type: "range", min: -180, max: 180, step: 1 }
    }
  }
};

export const _ND = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <ND {...args} />
  </div>
);
