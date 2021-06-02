import { useSimVar } from "@instruments/common/simVars";

export const sedSimVars = () => {
  const [engine1ExhaustGasTemperature] = useSimVar(
    "ENG EXHAUST GAS TEMPERATURE:1",
    "Number"
  );

  const [engine2ExhaustGasTemperature] = useSimVar(
    "ENG EXHAUST GAS TEMPERATURE:2",
    "Number"
  );

  const [engine3ExhaustGasTemperature] = useSimVar(
    "ENG EXHAUST GAS TEMPERATURE:3",
    "Number"
  );

  const [engine4ExhaustGasTemperature] = useSimVar(
    "ENG EXHAUST GAS TEMPERATURE:4",
    "Number"
  );

  const [engine1N1RPM] = useSimVar("ENG N1 RPM:1", "Number");
  const [engine2N1RPM] = useSimVar("ENG N1 RPM:2", "Number");
  const [engine3N1RPM] = useSimVar("ENG N1 RPM:3", "Number");
  const [engine4N1RPM] = useSimVar("ENG N1 RPM:4", "Number");

  const [engine1N2RPM] = useSimVar("ENG N2 RPM:1", "Number");
  const [engine2N2RPM] = useSimVar("ENG N2 RPM:2", "Number");
  const [engine3N2RPM] = useSimVar("ENG N2 RPM:3", "Number");
  const [engine4N2RPM] = useSimVar("ENG N2 RPM:4", "Number");

  const [engine1PressureRatio] = useSimVar(
    "TURB ENG PRESSURE RATIO:1",
    "Number"
  );
  const [engine2PressureRatio] = useSimVar(
    "TURB ENG PRESSURE RATIO:2",
    "Number"
  );
  const [engine3PressureRatio] = useSimVar(
    "TURB ENG PRESSURE RATIO:3",
    "Number"
  );
  const [engine4PressureRatio] = useSimVar(
    "TURB ENG PRESSURE RATIO:4",
    "Number"
  );

  // BELOW IS FOR GOVERNED WHEN USING STANDBY ENGINE FORMAT
  // ENG EXHAUST GAS TEMPERATURE GES:index

  return {
    engine1N1RPM,
    engine2N1RPM,
    engine3N1RPM,
    engine4N1RPM,
    engine1N2RPM,
    engine2N2RPM,
    engine3N2RPM,
    engine4N2RPM,
    engine1PressureRatio,
    engine2PressureRatio,
    engine3PressureRatio,
    engine4PressureRatio,
    engine1ExhaustGasTemperature,
    engine2ExhaustGasTemperature,
    engine3ExhaustGasTemperature,
    engine4ExhaustGasTemperature
  };
};
