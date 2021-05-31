import React from "react";
import { EDisplayModes, VSI } from "./vsi";
import { render } from "@instruments/common/index";

render(<VSI displayMode={EDisplayModes.ON} value={2500} />);
