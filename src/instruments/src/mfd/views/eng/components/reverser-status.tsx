import React from "react";
import { ReverserUnlockedIndicator } from "./reverser-unlocked-indicator";
import { ReverserDeployedIndicator } from "./reverser-deployed-indicator";

export enum EReverserStatus {
  STOWED = "STOWED",
  UNLOCKED = "UNLOCKED",
  DEPLOYED = "DEPLOYED"
}

export type TReverserStatus = {
  x: number;
  status: EReverserStatus;
};

export const ReverserStatus: React.FC<TReverserStatus> = ({ status, x }) => {
  switch (status) {
    case EReverserStatus.UNLOCKED: {
      return <ReverserUnlockedIndicator x={x} y={-279} />;
    }

    case EReverserStatus.DEPLOYED: {
      return <ReverserDeployedIndicator x={x} y={-279} />;
    }

    case EReverserStatus.STOWED:
    default:
      return <></>;
  }
};
