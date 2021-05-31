import React from "react";
import { ENGView } from "./styles";
import { SVGPath } from "../../styles";
import { colors } from "../../../../../globals/colours";
import EPRTapeScale from "./components/epr-tape-scale";
import { EReverserStatus, ReverserStatus } from "./components/reverser-status";
import { N1RPMPercent } from "./components/n1-rpm-percent";

export type ENGProps = {
  engine1N1RPM: number;
  engine2N1RPM: number;
  engine3N1RPM: number;
  engine4N1RPM: number;
  engine1Rating: number;
  engine1ReverserStatus: EReverserStatus;
  engine2Rating: number;
  engine2ReverserStatus: EReverserStatus;
  engine3Rating: number;
  engine3ReverserStatus: EReverserStatus;
  engine4Rating: number;
  engine4ReverserStatus: EReverserStatus;
};

export const ENG: React.FC<ENGProps> = ({
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM,
  engine1Rating,
  engine1ReverserStatus,
  engine2Rating,
  engine2ReverserStatus,
  engine3Rating,
  engine3ReverserStatus,
  engine4Rating,
  engine4ReverserStatus
}) => {
  return (
    <ENGView>
      ENG
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 800 800">
        <ReverserStatus x={77} status={engine1ReverserStatus} />
        <ReverserStatus x={207} status={engine2ReverserStatus} />
        <ReverserStatus x={526} status={engine3ReverserStatus} />
        <ReverserStatus x={654} status={engine4ReverserStatus} />
        <EPRTapeScale
          engine1Rating={engine1Rating}
          engine2Rating={engine2Rating}
          engine3Rating={engine3Rating}
          engine4Rating={engine4Rating}
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
