import React from "react";
import { render } from "@instruments/common/index";
import { EDisplayModes, EMFDViews, MFD, TMFDProps } from "./mfd";
import { useSimVar } from "@instruments/common/simVars";
import { TCFGProps } from "./views/cfg";
import { TENGProps } from "./views/eng";
import { EngineSimVars } from "../../simVars/engines";

const Panel: React.FC = () => {
  const [rightFlapsPosition] = useSimVar(
    "TRAILING EDGE FLAPS RIGHT PERCENT",
    "Number"
  );

  const [leftFlapsPosition] = useSimVar(
    "TRAILING EDGE FLAPS LEFT PERCENT",
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

  const cfgValues: TCFGProps = {
    flapPosition: Math.max(leftFlapsPosition, rightFlapsPosition),
    aileronPosition,
    elevatorPosition,
    rudderPosition,
    spoilerPosition: Math.max(leftSpoilerPosition, rightSpoilerPosition),
    slatPosition: Math.max(leftSlatsPosition, rightSlatsPosition),
    flapIndex: Math.max(leftFlapIndex, rightFlapIndex),
    rudderTrim,
    stabiliserTrim,
    aileronTrim,
    gearPosition,
    brakeTemperature: 0
  };

  const mfdProps: TMFDProps = {
    displayMode: EDisplayModes.DAY,
    displayView: EMFDViews.ENG,
    brightness: 100,
    contrast: 100,
    cfgValues: cfgValues,
    engValues: { ...EngineSimVars() }
  };

  return <MFD {...mfdProps} />;
};

render(<Panel />);
