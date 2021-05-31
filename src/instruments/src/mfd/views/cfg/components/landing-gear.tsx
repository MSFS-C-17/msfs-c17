import React from "react";
import { colors } from "../../../../../../globals/colours";
import { SVGRect, SVGText } from "../../../styles";

export type TLandingGearProps = {
  gearPosition: number;
  brakeTemperature: number;
};

export const LandingGear: React.FC<TLandingGearProps> = ({
  gearPosition,
  brakeTemperature = 0
}) => {
  const gearPositionColor = () => {
    switch (gearPosition) {
      case 0:
        return "transparent";
      case 1:
        return colors.DISPLAY_GREEN;
      case 2:
        return colors.DISPLAY_RED;
    }
  };

  const brakeTemperatureColor = (temp) => {
    const floorTemp = Math.floor(temp);

    if (floorTemp < 651) {
      return colors.DISPLAY_GREEN;
    } else if (floorTemp >= 651 && floorTemp < 751) {
      return colors.DISPLAY_YELLOW;
    } else {
      return colors.DISPLAY_RED;
    }
  };

  return (
    <>
      <g id="landing-gear">
        <SVGText
          color={colors.DISPLAY_WHITE}
          transform="matrix(1 0 0 1 363.1429 577.0728)"
        >
          GEAR
        </SVGText>
        <SVGRect
          color={gearPositionColor}
          x="356.33"
          y="640.47"
          width="31.63"
          height="44.23"
        />
        <SVGRect
          color={gearPositionColor}
          x="408.78"
          y="640.47"
          width="31.63"
          height="44.23"
        />
        <SVGRect
          color={gearPositionColor}
          x="408.78"
          y="703.08"
          width="31.63"
          height="44.23"
        />
        <SVGRect
          color={gearPositionColor}
          x="356.33"
          y="703.08"
          width="31.63"
          height="44.23"
        />
        <SVGRect
          color={gearPositionColor}
          x="386.15"
          y="597.66"
          width="23.78"
          height="31.24"
        />
      </g>

      <g id="brake-temps-left">
        <SVGText
          transform="matrix(1 0 0 1 138.7407 633.3583)"
          className="st2 st3 st4 st5"
        >
          BRAKE TEMP °C
        </SVGText>
        <SVGText
          id="router-outer-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 137.6413 734.0209)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          id="front-inner-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 297.4907 672.4281)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          id="front-center-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 217.5302 672.4281)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          id="front-outer-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 137.6413 672.4282)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          id="rear-center-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 217.53 734.0206)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          id="rear-inner-temp"
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 297.4907 734.0206)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
      </g>

      <g id="brake-temps-right">
        <SVGText
          transform="matrix(1 0 0 1 462.0824 633.3582)"
          className="st2 st3 st4 st5"
        >
          BRAKE TEMP °C
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 457.6873 672.4279)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 457.6872 734.0204)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 540.8715 734.0209)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 540.8712 672.4277)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 622.156 672.4285)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
        <SVGText
          color={brakeTemperatureColor(brakeTemperature)}
          textAlign="right"
          transform="matrix(1 0 0 1 622.1562 734.0209)"
          className="st2 st3 st6 st5"
        >
          {Math.floor(brakeTemperature)}
        </SVGText>
      </g>
    </>
  );
};
