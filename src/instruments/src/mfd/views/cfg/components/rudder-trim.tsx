import React from "react";
import { SVGPath, SVGPolygon, SVGText } from "../styles";
import { colors } from "../../../../../../globals/colours";
import { number } from "prop-types";

export type TRudderTrimProps = {
  scaleValue: number;
};

export const RudderTrim: React.FC<TRudderTrimProps> = ({ scaleValue }) => {
  const limitsFromZero = 47;
  const indicatorPosition = (limitsFromZero / 100) * scaleValue;

  return (
    <g id="rudder-trim">


      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 337.2571 79.6353)"
      >
        RUD TRIM
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 466.9644 114.3495)"
      >
        NR
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 338.0122 144.0445)"
      >
        10
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 301.9347 114.3495)"
      >
        NL
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 391.9815 144.0443)"
      >
        0
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 432.6117 144.0445)"
      >
        10
      </SVGText>
      <SVGPolygon
        color={colors.DISPLAY_WHITE}
        points="400.16,103.47 400.16,94.57 398.16,94.57 398.16,103.47 351.08,103.47 351.08,119.11 353.08,119.11
		353.08,106.47 374.62,106.47 374.62,119.11 376.62,119.11 376.62,106.47 398.16,106.47 398.16,119.11 400.16,119.11 400.16,106.47
		421.71,106.47 421.71,119.11 423.71,119.11 423.71,106.47 445.25,106.47 445.25,119.11 447.25,119.11 447.25,103.47"
      />
      <SVGPath
        id="rudder-trim-indicator"
        color={colors.DISPLAY_GREEN}
        transform={`translate(${indicatorPosition},0)`}
        d="M399.35,106.84c-0.75,0-1.44-0.42-1.78-1.09l-7.6-14.97
	c-0.5-0.98-0.11-2.19,0.88-2.69c0.98-0.5,2.19-0.11,2.69,0.88l5.77,11.37l5.47-11.33c0.48-0.99,1.67-1.41,2.67-0.93
	c0.99,0.48,1.41,1.68,0.93,2.67l-7.22,14.97c-0.33,0.68-1.02,1.12-1.78,1.13C399.37,106.84,399.36,106.84,399.35,106.84z"
      />
    </g>
  );
};
