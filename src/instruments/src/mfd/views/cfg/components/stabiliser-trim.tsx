import React from "react";
import { SVGPolygon, SVGText, SVGPath } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TStabliserTrimProps = {
  stabiliserTrim: number;
};

export const StabiliserTrim: React.FC<TStabliserTrimProps> = ({
  stabiliserTrim
}) => {
  const positiveLimitFromZero = 70;
  const negativeLimitFromZero = 23;

  const stabiliserTrimDegrees = stabiliserTrim * (180 / Math.PI);

  let indicatorPosition = (() => {
    if (stabiliserTrim > 0)
      return (positiveLimitFromZero / 15) * -stabiliserTrimDegrees;
    else if (stabiliserTrim < 0)
      return (negativeLimitFromZero / 5) * -stabiliserTrimDegrees;
    else return 0;
  })();

  return (
    <g id="stabilier-trim">
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 489.1833 151.2161)"
        className="st2 st3 st4 st5"
      >
        15
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 500.0106 221.4155)"
        className="st2 st3 st4 st5"
      >
        0
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 500.011 244.6442)"
        className="st2 st3 st4 st5"
      >
        5
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 553.5074 150.2162)"
        className="st2 st3 st4 st5"
      >
        NU
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 551.9646 246.6443)"
        className="st2 st3 st4 st5"
      >
        ND
      </SVGText>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 582.8757 186.1207)"
      >
        <tspan x="0" y="0" className="st2 st3 st4 st5">
          STAB
        </tspan>
        <tspan x="2.59" y="26" className="st2 st3 st4 st5">
          TRIM
        </tspan>
      </SVGText>
      <SVGPolygon
        color={colors.DISPLAY_WHITE}
        className="st2"
        points="538.77,214.93 551.06,214.93 551.06,212.93 538.77,212.93 	"
      />
      <SVGPolygon
        color={colors.DISPLAY_WHITE}
        className="st2"
        points="538.77,142.67 522.61,142.67 522.61,144.67 535.77,144.67 535.77,166.09 522.61,166.09
		522.61,168.09 535.77,168.09 535.77,189.51 522.61,189.51 522.61,191.51 535.77,191.51 535.77,212.93 523.84,212.93 523.84,214.93
		535.77,214.93 535.77,236.36 522.61,236.36 522.61,238.36 538.77,238.36 	"
      />
      <SVGPath
        color={colors.DISPLAY_GREEN}
        transform={`translate(0,${indicatorPosition})`}
        d="M551.96,221c-0.19,0-0.37-0.03-0.55-0.1l-14.09-5.56c-0.57-0.23-0.95-0.78-0.95-1.4s0.38-1.17,0.95-1.4
	l14.09-5.56c0.46-0.18,0.99-0.12,1.39,0.16c0.41,0.28,0.66,0.74,0.66,1.24v11.12c0,0.5-0.25,0.96-0.66,1.24
	C552.55,220.91,552.26,221,551.96,221z M541.95,213.93l8.51,3.36v-6.71L541.95,213.93z"
      />
    </g>
  );
};
