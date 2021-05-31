import React from "react";
import { EDisplayModes, APPR } from "./appr";
import { render } from "@instruments/common/index";

render(<APPR displayMode={EDisplayModes.ON} deckAngle={1.1} />);
