import React from "react";
import { SVGPath, SVGPolygon, SVGText } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TAileronTrimProps = {
  aileronTrim: number;
};

export const AileronTrim: React.FC<TAileronTrimProps> = ({ aileronTrim }) => {
  const positiveLimitFromZero = 47;
  const negativeLimitFromZero = 48;

  const aileronTrimDegrees = aileronTrim * (180 / Math.PI);

  let indicatorPosition = (() => {
    if (aileronTrim > 0)
      return (positiveLimitFromZero / 10) * -aileronTrimDegrees;
    else if (aileronTrim < 0)
      return (negativeLimitFromZero / 10) * -aileronTrimDegrees;
    else return 0;
  })();

  return (
    <g id="aileron-trim">
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 698.6154 252.435)"
      >
        <tspan x="0" y="0" className="st2 st3 st6">
          AIL
        </tspan>
        <tspan x="-11.79" y="26" className="st2 st3 st6">
          TRIM
        </tspan>
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 692.1059 316.2065)"
        className="st2 st3 st4 st5"
      >
        RWD
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 674.3258 346.93)"
        className="st2 st3 st4 st5"
      >
        10
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 674.326 442.3584)"
        className="st2 st3 st4 st5"
      >
        10
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 686.9535 393.2438)"
        className="st2 st3 st4 st5"
      >
        0
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 691.0651 474.7296)"
        className="st2 st3 st4 st7"
      >
        LWD
      </SVGText>
      <SVGPolygon
        id="Ail_Trim_Measure"
        color={colors.DISPLAY_WHITE}
        points="733.64,385.15 721.25,385.15 721.25,339.18 721.21,339.18 721.21,338.18
		707.69,338.18 707.69,340.18 718.25,340.18 718.25,362.06 707.69,362.06 707.69,364.06 718.25,364.06 718.25,385.15 707.69,385.15
		707.69,387.15 718.25,387.15 718.25,409.37 707.69,409.37 707.69,411.37 718.25,411.37 718.25,433.58 707.69,433.58 707.69,435.58
		721.21,435.58 721.21,434.58 721.25,434.58 721.25,387.15 733.64,387.15 	"
      />

      <SVGPath
        id="aileron-trim-indicator"
        color={colors.DISPLAY_GREEN}
        transform={`translate(0,${indicatorPosition})`}
        d="M718.46,386.17c0-0.75,0.42-1.44,1.09-1.78l14.97-7.6
	c0.98-0.5,2.19-0.11,2.69,0.88c0.5,0.98,0.11,2.19-0.88,2.69l-11.37,5.77l11.33,5.47c0.99,0.48,1.41,1.67,0.93,2.67
	c-0.48,0.99-1.68,1.41-2.67,0.93l-14.97-7.22c-0.68-0.33-1.12-1.02-1.13-1.78C718.46,386.18,718.46,386.17,718.46,386.17z"
      />
    </g>
  );
};
