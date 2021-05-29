import React from "react";
import { EDisplayModes, TFI } from "./tfi";
import { render } from "@instruments/common/index";

render(<TFI displayMode={EDisplayModes.ON} fuelAmount={500} />);
