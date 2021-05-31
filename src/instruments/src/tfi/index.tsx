import React from "react";
import { EDisplayModes, TFI } from "./tfi";
import { render } from "@instruments/common/index";
import { useSimVar } from "@instruments/common/simVars";

const Panel: React.FC = () => {
  const [totalFuelAmount] = useSimVar("FUEL TOTAL QUANTITY WEIGHT", "Number");

  console.log("totalFuelAmount", totalFuelAmount);

  return <TFI displayMode={EDisplayModes.ON} fuelAmount={totalFuelAmount} />;
};

render(<Panel />);
