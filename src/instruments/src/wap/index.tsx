import React from "react";
import { WAP, TDisplayMode } from "./wap";
import { render } from "@instruments/common/index";

const Panel = () => <WAP displayMode={TDisplayMode.ON} />;

render(<Panel />);
