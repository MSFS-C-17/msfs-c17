import React from "react";
import { ENGView } from "./styles";
import EPRTapeScale from "./components/epr-tape-scale";
import { EReverserStatus, ReverserStatus } from "./components/reverser-status";
import { N1RPMPercent } from "./components/n1-rpm-percent";

export type TENGProps = {
  engine1N1RPM: number;
  engine2N1RPM: number;
  engine3N1RPM: number;
  engine4N1RPM: number;
  engine1N2RPM: number;
  engine2N2RPM: number;
  engine3N2RPM: number;
  engine4N2RPM: number;
  engine1N1RPM_: number;
  engine2N1RPM_: number;
  engine3N1RPM_: number;
  engine4N1RPM_: number;
  engine1N2RPM_: number;
  engine2N2RPM_: number;
  engine3N2RPM_: number;
  engine4N2RPM_: number;
  engine1PressureRatio: number;
  engine2PressureRatio: number;
  engine3PressureRatio: number;
  engine4PressureRatio: number;
  engine1ReverserPercent: number;
  engine2ReverserPercent: number;
  engine3ReverserPercent: number;
  engine4ReverserPercent: number;
  engine1ExhaustGasTemperature: number;
  engine2ExhaustGasTemperature: number;
  engine3ExhaustGasTemperature: number;
  engine4ExhaustGasTemperature: number;
};

export const ENG: React.FC<TENGProps> = ({
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM,
  engine1PressureRatio,
  engine2PressureRatio,
  engine3PressureRatio,
  engine4PressureRatio,
  engine1ReverserPercent,
  engine2ReverserPercent,
  engine3ReverserPercent,
  engine4ReverserPercent
}) => {
  console.log("-", engine1PressureRatio);
  console.log("+", engine1ReverserPercent);

  return (
    <ENGView>
      ENG
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 800 800">
        <ReverserStatus
          x={77}
          status={
            engine1ReverserPercent > 0
              ? EReverserStatus.DEPLOYED
              : EReverserStatus.STOWED
          }
        />
        <ReverserStatus
          x={207}
          status={
            engine2ReverserPercent > 0
              ? EReverserStatus.DEPLOYED
              : EReverserStatus.STOWED
          }
        />
        <ReverserStatus
          x={526}
          status={
            engine3ReverserPercent > 0
              ? EReverserStatus.DEPLOYED
              : EReverserStatus.STOWED
          }
        />
        <ReverserStatus
          x={654}
          status={
            engine4ReverserPercent > 0
              ? EReverserStatus.DEPLOYED
              : EReverserStatus.STOWED
          }
        />
        <EPRTapeScale
          engine1Rating={engine1PressureRatio}
          engine2Rating={engine2PressureRatio}
          engine3Rating={engine3PressureRatio}
          engine4Rating={engine4PressureRatio}
        />
        <N1RPMPercent
          engine1N1RPM={engine1N1RPM}
          engine2N1RPM={engine2N1RPM}
          engine3N1RPM={engine3N1RPM}
          engine4N1RPM={engine4N1RPM}
        />
      </svg>
    </ENGView>
  );
};

export default ENG;
