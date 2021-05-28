import React from "react";
import { colors } from "../../../../../globals/colours";
import { CFGView } from "./styles";
import { RudderTrim } from "./components/rudder-trim";
import { AileronTrim } from "./components/aileron-trim";
import { StabiliserTrim } from "./components/stabiliser-trim";
import { ELandingGearStowState, LandingGear } from "./components/landing-gear";
import { Ailerons } from "./components/ailerons";
import { Flaps } from "./components/flaps";
import { Spoilers } from "./components/spoilers";
import { Elevators } from "./components/elevators";
import { Rudder } from "./components/rudder";
import { Slats } from "./components/slats";

import { SVGPath, SVGText } from "../../styles";

export type CFGProps = {
  ailerons: number;
  aileronTrim: number;
  flaps: number;
  spoilers: number;
  elevators: number;
  stabiliserTrim: number;
  rudder: number;
  rudderTrim: number;
  slats: number;
};

export const CFG: React.FC<CFGProps> = ({
  ailerons,
  aileronTrim,
  flaps,
  spoilers,
  elevators,
  stabiliserTrim,
  rudder,
  rudderTrim,
  slats
}) => {
  const flapPosition = (() => {
    switch (true) {
      case flaps === 100:
        return "FULL";
      case flaps >= 75:
        return "3/4";
      case flaps >= 50:
        return "1/2";
      default:
        return "UP";
    }
  })();

  return (
    <CFGView>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 800 800">
        <SVGPath
          id="fuselage"
          color={colors.DISPLAY_WHITE}
          d="M659.84,394.56l7.46-22.93l-1.18-3.08h-10.07l-5.84,9.33H406.71V197.1h79.58v-14.19H310.43v14.19
        h79.58v180.79H146.51l-5.84-9.33H130.6l-1.18,3.08l7.46,22.93h221.29c-2.69,6.93-9.64,29.21,2.85,48.92l0.06,0.09
        c1.49,2.02,8.48,8.5,36.26,8.8v0.01c0.35,0,0.68-0.01,1.02-0.01c0.34,0,0.67,0.01,1.02,0.01v-0.01c27.77-0.3,34.76-6.78,36.26-8.8
        l0.06-0.09c12.49-19.71,5.54-41.99,2.85-48.92H659.84z M433.94,391.56l0.99,2.13c0.12,0.26,12.01,26.36-1.74,48.13
        c-0.72,0.93-6.74,7.4-34.83,7.55c-28.09-0.16-34.12-6.63-34.83-7.55c-13.75-21.76-1.86-47.86-1.74-48.13l0.99-2.13H139.06
        l-6.46-19.85l0.06-0.16H139l5.84,9.33h248.17V194.1h-79.58v-8.19h169.86v8.19h-79.58v186.79h248.17l5.84-9.33h6.35l0.06,0.16
        l-6.46,19.85H433.94z"
        />

        <SVGText
          color={colors.DISPLAY_WHITE}
          transform="matrix(1 0 0 1 324.5364 481.6738)"
          textAlign="center"
        >
          FLAPS {flapPosition}
        </SVGText>
        <SVGText
          color={colors.DISPLAY_WHITE}
          transform="matrix(1 0 0 1 342.8868 512.798)"
        >
          INDEX {flaps}
        </SVGText>

        <Ailerons scaleValue={ailerons} />
        <AileronTrim scaleValue={aileronTrim} />
        <Flaps scaleValue={flaps} />

        <RudderTrim scaleValue={rudderTrim} />
        <StabiliserTrim scaleValue={stabiliserTrim} />
        <Elevators scaleValue={elevators} />
        <Spoilers scaleValue={spoilers} />
        <Rudder scaleValue={rudder} />
        <Slats scaleValue={slats} />
        <LandingGear state={ELandingGearStowState.DOWN} brakeTemp={751} />
      </svg>
    </CFGView>
  );
};

export default CFG;
