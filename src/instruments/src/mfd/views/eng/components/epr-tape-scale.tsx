import React from "react";
import { colors } from "../../../../../../globals/colours";
import { SVGPath, SVGText, SVGRect } from "../../../styles";

export type TEPRTapeScaleProps = {
  engine1Rating: number;
  engine2Rating: number;
  engine3Rating: number;
  engine4Rating: number;
};

type ScaleIndicator = {
  x: number;
  scaleValue: number;
};

const ScaleIndicator: React.FC<ScaleIndicator> = ({ x, scaleValue }) => {
  const min = 0.85;
  const max = 1.85;
  const y = 250.41;
  const height = 367.09;

  const scalePercent = ((scaleValue - min) * 100) / (max - min) / 100;

  let newHeight = 0;
  if (scaleValue >= 1.85) {
    newHeight = height;
  } else if (scaleValue > 0.85) {
    newHeight = height * scalePercent;
  }

  return (
    <SVGRect
      color={colors.DISPLAY_GREEN}
      x={x}
      y={y + (height - newHeight)}
      width={15.42}
      height={newHeight}
    />
  );
};

export const EPRTapeScale: React.FC<TEPRTapeScaleProps> = ({
  engine1Rating,
  engine2Rating,
  engine3Rating,
  engine4Rating
}) => {
  return (
    <g>
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M202.82,273.43v-3h-23.82v-23.02h-21.42V620.5h21.42v-16.12h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77
	h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3
	h-23.82V310.2h23.82v-3h-23.82v-33.77H202.82z M175.99,617.5h-15.42V250.41h15.42V617.5z"
      />
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M340.54,273.43v-3h-23.82v-23.02h-21.42V620.5h21.42v-16.12h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77
	h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3h-23.82v-33.77h23.82v-3
	h-23.82V310.2h23.82v-3h-23.82v-33.77H340.54z M313.71,617.5h-15.42V250.41h15.42V617.5z"
      />
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M480.84,273.43v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77
	h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v16.12h21.42V247.41h-21.42
	v23.02h-23.82v3H480.84z M483.84,250.41h15.42V617.5h-15.42V250.41z"
      />
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M618.55,273.43v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77
	h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v33.77h-23.82v3h23.82v16.12h21.42V247.41h-21.42
	v23.02h-23.82v3H618.55z M621.55,250.41h15.42V617.5h-15.42V250.41z"
      />

      <ScaleIndicator x={160.57} scaleValue={engine1Rating} />
      <ScaleIndicator x={298.29} scaleValue={engine2Rating} />
      <ScaleIndicator x={483.84} scaleValue={engine3Rating} />
      <ScaleIndicator x={621.55} scaleValue={engine4Rating} />

      <SVGText transform="matrix(1 0 0 1 380.6056 280.2456)">1.8</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6055 317.2153)">1.7</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6055 354.1854)">1.6</SVGText>
      <SVGText transform="matrix(1 0 0 1 398.6418 612.9745)">.9</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 391.1556)">1.5</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 428.1255)">1.4</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 465.0954)">1.3</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 502.0653)">1.2</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 539.0352)">1.1</SVGText>
      <SVGText transform="matrix(1 0 0 1 380.6056 576.0051)">1.0</SVGText>
    </g>
  );
};

export default EPRTapeScale;
