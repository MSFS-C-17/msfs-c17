import React, { useState } from "react";
import { render } from "@instruments/common/index";
import { EDisplayModes, EMFDViews, MFD, TMFDProps } from "./mfd";
import { useSimVar, useInteractionEvent } from "../util";

const url: URL = new URL(
  document.getElementsByTagName("c17a-mfd")[0].getAttribute("url")
);
const searchParams = url.searchParams;
const pId = searchParams.get("pId");

const Panel: React.FC = () => {
  const [displayView, setDisplayView] = useState(
    searchParams.get("displayView") || ""
  );

  // console.log(pId, displayView);

  // define buttons
  // const [pfdButton] = useSimVar(`${pId} BOTTOM 1`, "bool");
  // const [ndButton] = useSimVar(`${pId} BOTTOM 2`, "bool");
  // const [ppiButton] = useSimVar(`${pId} BOTTOM 3`, "bool");
  useInteractionEvent(`L:${pId} BOTTOM 4`, (a, b, c) => {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
  });

  const [test1] = useSimVar(`L:${pId} BOTTOM 4`, "number");
  const [test2] = useSimVar(`${pId} BOTTOM 4`, "number");

  console.log("test1", test1);
  console.log("test2", test2);

  // const [cfgButton] = useSimVar(`${pId} BOTTOM 5`, "bool");
  // const [inopButton] = useSimVar(`${pId} BOTTOM 6`, "bool");

  // console.log("engButton", engButton);
  // console.log("cfgButton", cfgButton);

  const mfdProps: TMFDProps = {
    displayMode: EDisplayModes.DAY,
    displayView: EMFDViews[displayView],
    brightness: 100,
    contrast: 100
  };

  return <MFD {...mfdProps} />;
};

render(<Panel />);
