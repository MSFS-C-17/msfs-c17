import React from "react";
import ReactDOM from "react-dom";
import * as Defaults from "./defaults";
// import { SimVarProvider } from "./simVars";

export const render = (Slot: React.ReactElement) => {
  ReactDOM.render(
    <>{Slot}</>,
    // <SimVarProvider>{Slot}</SimVarProvider>,
    Defaults.getRenderTarget()
  );
};
