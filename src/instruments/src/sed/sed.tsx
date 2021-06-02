import React from "react";
import {
  SEDContainer,
  Value,
  GhostValue,
  Line,
  PrimaryTitle,
  SecondaryTitle
} from "./styles";
import DSEG7ClassicRegular from "../../../globals/fonts/dseg7-classic-regular";
import DSEG14ClassicRegular from "../../../globals/fonts/dseg14-classic-regular";

export enum EDisplayModes {
  ON = "ON",
  OFF = "OFF"
}

export enum ESEDMode {
  MAX = "MAX",
  INT = "INT",
  MCT = "MCT",
  DRT = "DRT",
  MAN = "MAN"
}

export enum ESEDSelect {
  OFF = "OFF",
  N2 = "N2",
  EPR = "EPR"
}

export type TSEDProps = {
  displayMode: EDisplayModes;
  mode: ESEDMode;
  select: ESEDSelect;
  setRating: number;
  engine1PressureRatio: number;
  engine2PressureRatio: number;
  engine3PressureRatio: number;
  engine4PressureRatio: number;
  engine1ExhaustGasTemperature: number;
  engine2ExhaustGasTemperature: number;
  engine3ExhaustGasTemperature: number;
  engine4ExhaustGasTemperature: number;
  engine1N1RPM: number;
  engine2N1RPM: number;
  engine3N1RPM: number;
  engine4N1RPM: number;
  engine1N2RPM: number;
  engine2N2RPM: number;
  engine3N2RPM: number;
  engine4N2RPM: number;
};

//WARNING AND CAUTION ANNUNCIATION PANEL
export const SED: React.FC<TSEDProps> = ({
  displayMode,
  engine1PressureRatio,
  engine2PressureRatio,
  engine3PressureRatio,
  engine4PressureRatio,
  engine1ExhaustGasTemperature,
  engine2ExhaustGasTemperature,
  engine3ExhaustGasTemperature,
  engine4ExhaustGasTemperature,
  engine1N1RPM,
  engine2N1RPM,
  engine3N1RPM,
  engine4N1RPM,
  engine1N2RPM,
  engine2N2RPM,
  engine3N2RPM,
  engine4N2RPM,
  mode,
  select,
  setRating
}) => {
  const displayN2orEPR = (n2Value: number, eprValue: number) => {
    switch (select) {
      case ESEDSelect.N2:
        return (n2Value * 100).toFixed(1);
      case ESEDSelect.EPR:
        return eprValue;
      default:
        return "";
    }
  };

  return (
    <>
      <DSEG7ClassicRegular />
      <DSEG14ClassicRegular />

      <SEDContainer>
        {displayMode === EDisplayModes.ON && (
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 925 532">
            <g id="Ghost">
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 405 106)">
                ~.~~
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 811 108)">
                ~~~
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 203 225)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 385 228)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 681 228)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 864 228)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 385 352)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 203 352)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 681 352)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 864 352)">
                888
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 203 471)">
                188
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 385 471)">
                188
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 681 471)">
                188
              </GhostValue>
              <GhostValue textAnchor="end" transform="matrix(1 0 0 1 864 471)">
                188
              </GhostValue>
            </g>

            {select !== ESEDSelect.OFF && (
              <>
                <Line x1="109" y1="116" x2="808" y2="116" />
                <Line x1="459" y1="116" x2="459" y2="38" />
                <g id="N2_EPR">
                  {select === ESEDSelect.N2 && (
                    <SecondaryTitle transform="matrix(0.7528 0 0 1 426 169)">
                      N2
                    </SecondaryTitle>
                  )}
                  {select === ESEDSelect.EPR && (
                    <SecondaryTitle transform="matrix(0.7528 0 0 1 413 225)">
                      EPR
                    </SecondaryTitle>
                  )}
                  <Value textAnchor="end" transform="matrix(1 0 0 1 203 228)">
                    {displayN2orEPR(engine1N2RPM, engine1PressureRatio)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 385 228)">
                    {displayN2orEPR(engine2N2RPM, engine2PressureRatio)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 681 228)">
                    {displayN2orEPR(engine3N2RPM, engine3PressureRatio)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 864 228)">
                    {displayN2orEPR(engine4N2RPM, engine4PressureRatio)}
                  </Value>
                </g>
                <g id="EGT">
                  <SecondaryTitle transform="matrix(0.7528 0 0 1 413 347)">
                    EGT
                  </SecondaryTitle>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 203 352)">
                    {engine1ExhaustGasTemperature}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 385 352)">
                    {engine2ExhaustGasTemperature}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 681 352)">
                    {engine3ExhaustGasTemperature}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 864 352)">
                    {engine4ExhaustGasTemperature}
                  </Value>
                </g>
                <g id="N1">
                  <SecondaryTitle transform="matrix(0.7528 0 0 1 426 471)">
                    N1
                  </SecondaryTitle>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 203 471)">
                    {(engine1N1RPM * 100).toFixed(1)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 385 471)">
                    {(engine2N1RPM * 100).toFixed(1)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 681 471)">
                    {engine3N1RPM.toFixed(1)}
                  </Value>
                  <Value textAnchor="end" transform="matrix(1 0 0 1 864 471)">
                    {engine4N1RPM.toFixed(1)}
                  </Value>
                </g>
              </>
            )}

            <PrimaryTitle transform="matrix(0.7528 0 0 1 122 106)">
              RTG
            </PrimaryTitle>
            <Value textAnchor="end" transform="matrix(1 0 0 1 405 106)">
              {setRating || "-.--"}
            </Value>
            <PrimaryTitle transform="matrix(0.7528 0 0 1 479 106)">
              MODE
            </PrimaryTitle>
            <Value textAnchor="end" transform="matrix(1 0 0 1 811 108)">
              {mode || "***"}
            </Value>
          </svg>
        )}
      </SEDContainer>
    </>
  );
};
