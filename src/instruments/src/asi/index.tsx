import React from "react";
import { ASI, EDisplayModes, EMode, EUnit } from "./asi";
import { render } from "@instruments/common/index";

render(
  <ASI
    displayMode={EDisplayModes.ON}
    value={500}
    mode={EMode.THRUST}
    unit={EUnit.MACH}
  />
);
