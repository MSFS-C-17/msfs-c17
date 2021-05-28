import React from "react";
import { colors } from "../../../../../../globals/colours";
import { SVGPath } from "../../../styles";

export type TReverserUnlockedIndicatorProps = {
  x: number;
  y: number;
};

export const ReverserUnlockedIndicator: React.FC<TReverserUnlockedIndicatorProps> =
  ({ x = 0, y = 0 }) => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x={x}
        y={y}
        width={65}
        viewBox="0 0 62.48 53.91"
        // style="enable-background:new 0 0 62.48 53.91;"
        // xml:space="preserve"
      >
        <SVGPath
          color={colors.DISPLAY_YELLOW}
          d="M11.51,18.22h2.27v9.93c0,1.73-0.2,3.1-0.59,4.11c-0.39,1.02-1.1,1.84-2.12,2.48s-2.36,0.96-4.01,0.96
		c-1.61,0-2.93-0.28-3.95-0.83s-1.75-1.36-2.19-2.41c-0.44-1.05-0.66-2.49-0.66-4.31v-9.93h2.27v9.91c0,1.49,0.14,2.59,0.42,3.3
		c0.28,0.71,0.75,1.25,1.43,1.63s1.5,0.57,2.48,0.57c1.67,0,2.86-0.38,3.57-1.14c0.71-0.76,1.07-2.21,1.07-4.37V18.22z
	M17.23,35.4V18.22h2.33l9.02,13.49V18.22h2.18V35.4h-2.33l-9.02-13.5v13.5H17.23z
	M34.18,35.4V18.22h2.27v15.15h8.46v2.03H34.18z
	M47.22,35.4V18.22h2.27v8.52l8.53-8.52h3.08l-7.21,6.96l7.52,10.22h-3l-6.12-8.7l-2.81,2.74v5.95H47.22z
	M54.62,11.26C50.93,6.04,45.82,0.43,31.89,0c-0.02,0-0.03,0-0.05,0c-0.01,0-0.03,0-0.04,0
	C17.87,0.43,12.76,6.04,9.07,11.26c-0.48,0.68-0.32,1.61,0.36,2.09c0.26,0.19,0.57,0.28,0.86,0.28c0.47,0,0.93-0.22,1.23-0.63
	c3.43-4.84,7.82-9.6,20.33-9.99C44.36,3.39,48.75,8.15,52.17,13c0.29,0.41,0.76,0.63,1.23,0.63c0.3,0,0.6-0.09,0.86-0.28
	C54.94,12.87,55.1,11.94,54.62,11.26z
	M54.62,42.65c-3.7,5.23-8.81,10.84-22.73,11.26c-0.02,0-0.03,0-0.05,0c-0.01,0-0.03,0-0.04,0
	c-13.92-0.43-19.04-6.04-22.73-11.26c-0.48-0.68-0.32-1.61,0.36-2.09c0.26-0.19,0.57-0.28,0.86-0.28c0.47,0,0.93,0.22,1.23,0.63
	c3.43,4.84,7.82,9.6,20.33,9.99c12.51-0.39,16.9-5.15,20.33-9.99c0.29-0.41,0.76-0.63,1.23-0.63c0.3,0,0.6,0.09,0.86,0.28
	C54.94,41.04,55.1,41.97,54.62,42.65z"
        />
      </svg>
    );
  };
