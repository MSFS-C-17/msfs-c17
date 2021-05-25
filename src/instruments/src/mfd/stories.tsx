import React, { useState } from "react";
import MFD, { EMFDViews } from "./index";

export default {
  title: "MFD",
  component: MFD,
  argTypes: {
    displayView: {
      options: Object.keys(EMFDViews),
      mapping: EMFDViews,
      control: { type: "select" },
    },
  },
};

export const _MFD = (args) => (
  <>
    <MFD {...args} />
  </>
);
