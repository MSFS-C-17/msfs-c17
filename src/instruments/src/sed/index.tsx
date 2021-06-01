import React from "react";
import { SED, TSEDProps } from "./sed";
import { render } from "@instruments/common/index";
import { EngineSimVars } from "../../simVars/engines";

const {
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM,
  engine1N2RPM,
  engine2N2RPM,
  engine3N2RPM,
  engine4N2RPM,
  engine1ExhaustGasTemperature,
  engine2ExhaustGasTemperature,
  engine3ExhaustGasTemperature,
  engine4ExhaustGasTemperature,
  engine1PressureRatio,
  engine2PressureRatio,
  engine3PressureRatio,
  engine4PressureRatio
} = EngineSimVars();

const sedProps: TSEDProps = {
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM,
  engine1N2RPM,
  engine2N2RPM,
  engine3N2RPM,
  engine4N2RPM,
  engine1ExhaustGasTemperature,
  engine2ExhaustGasTemperature,
  engine3ExhaustGasTemperature,
  engine4ExhaustGasTemperature,
  engine1PressureRatio,
  engine2PressureRatio,
  engine3PressureRatio,
  engine4PressureRatio
};

const Panel = () => <SED {...sedProps} />;

render(<Panel />);
