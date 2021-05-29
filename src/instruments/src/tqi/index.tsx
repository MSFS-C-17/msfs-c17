import React from "react";
import { EDisplayModes, TQI } from "./tqi";
import { render } from "@instruments/common/index";

render(<TQI displayMode={EDisplayModes.ON} fuelAmount={100} />);
