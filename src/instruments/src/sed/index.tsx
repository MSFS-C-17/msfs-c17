import React from "react";
import { EDisplayModes, ESEDMode, ESEDSelect, SED, TSEDProps } from "./sed";
import { render } from "@instruments/common/index";
// import { useSimVar } from "@instruments/common/simVars";
import { sedSimVars } from "./simvars";
import { useInteractionEvent } from "@instruments/common/hooks";
import { useSimVar } from "@instruments/common/simVars";

const Panel = () => {
  const sedProps: TSEDProps = {
    ...sedSimVars(),
    select: ESEDSelect.N2,
    mode: ESEDMode.MCT,
    setRating: 1.42,
    displayMode: EDisplayModes.ON
  };

  //define sed buttons

  // let mode = ESEDMode.MCT;
  useInteractionEvent("L:SED_MODE_MAX", () => {
    console.log("-->", ESEDMode.MAX);
  });

  const [sedModeMax] = useSimVar("L:SED_MODE_MAX", "number");

  console.log("!->", sedModeMax);

  // // useInteractionEvent("L:SED_MODE_INT", () => (mode = ESEDMode.INT));
  // // useInteractionEvent("L:SED_MODE_MCT", () => (mode = ESEDMode.MCT));
  // // useInteractionEvent("L:SED_MODE_DRT", () => (mode = ESEDMode.DRT));
  // // useInteractionEvent("L:SED_MODE_MAN", () => (mode = ESEDMode.MAN));
  //
  // console.log("mode", mode);

  return <SED {...sedProps} />;
};

render(<Panel />);
