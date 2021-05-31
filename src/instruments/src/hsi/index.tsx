import React from "react";
import { EDisplayModes, HSI, THSIProps } from "./hsi";
import { useSimVar } from "@instruments/common/simVars";
import { render } from "@instruments/common/index";
import { RadiansToDegrees } from "../../utils/radians-to-degrees";

const Panel: React.FC = () => {
  const [headingRadians] = useSimVar("AUTOPILOT HEADING LOCK DIR", "Number");

  const HSIProps: THSIProps = {
    displayMode: EDisplayModes.ON,
    headingDegrees: Math.floor(RadiansToDegrees(headingRadians))
  };
  return <HSI {...HSIProps} />;
};

render(<Panel />);
