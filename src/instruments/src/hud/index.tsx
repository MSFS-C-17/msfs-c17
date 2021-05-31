import React from "react";
import { EDisplayModes, HUD } from "./hud";
import { render } from "@instruments/common/index";

const Panel: React.FC = () => {
  return <HUD />;
};

render(<Panel />);
