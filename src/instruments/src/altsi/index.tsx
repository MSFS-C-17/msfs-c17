import React from "react";
import { AltSI, EDisplayModes } from "./altsi";
import { render } from "@instruments/common/index";

render(<AltSI displayMode={EDisplayModes.ON} value={25500} />);
