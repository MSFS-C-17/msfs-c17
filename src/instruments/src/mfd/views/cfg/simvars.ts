import { useSimVar } from "@instruments/common/simVars";

export const CFGSimVars = () => {
  const [leftFlapsPosition] = useSimVar(
    "TRAILING EDGE FLAPS LEFT PERCENT",
    "Number"
  );
  const [rightFlapsPosition] = useSimVar(
    "TRAILING EDGE FLAPS RIGHT PERCENT",
    "Number"
  );

  const [rudderPosition] = useSimVar("RUDDER POSITION", "Number");
  const [elevatorPosition] = useSimVar("ELEVATOR POSITION", "Number");
  const [aileronPosition] = useSimVar("AILERON POSITION", "Number");
  const [leftSpoilerPosition] = useSimVar("SPOILERS LEFT POSITION", "Number");
  const [rightSpoilerPosition] = useSimVar("SPOILERS RIGHT POSITION", "Number");
  const [leftSlatsPosition] = useSimVar(
    "LEADING EDGE FLAPS LEFT PERCENT",
    "Number"
  );
  const [rightSlatsPosition] = useSimVar(
    "LEADING EDGE FLAPS RIGHT PERCENT",
    "Number"
  );
  const [rudderTrim] = useSimVar("RUDDER TRIM", "Number");
  const [stabiliserTrim] = useSimVar("ELEVATOR TRIM POSITION", "Number");
  const [aileronTrim] = useSimVar("AILERON TRIM", "Number");
  const [leftFlapIndex] = useSimVar("TRAILING EDGE FLAPS LEFT INDEX", "Number");
  const [rightFlapIndex] = useSimVar(
    "TRAILING EDGE FLAPS RIGHT INDEX",
    "Number"
  );
  const [gearPosition] = useSimVar("GEAR POSITION", "Number");

  return {
    leftFlapsPosition,
    rightFlapsPosition,
    rudderPosition,
    elevatorPosition,
    aileronPosition,
    leftSpoilerPosition,
    rightSpoilerPosition,
    leftSlatsPosition,
    rightSlatsPosition,
    rudderTrim,
    stabiliserTrim,
    aileronTrim,
    leftFlapIndex,
    rightFlapIndex,
    gearPosition
  };
};
