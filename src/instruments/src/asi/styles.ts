import styled from "styled-components";
import * as LCD from "../components/lcd-common";

export const ASIContainer = styled(LCD.Container)`
  width: 512px;
  height: 102px;
`;

export const DigitsWrapper = styled(LCD.DigitsWrapper)`
  width: 452px;
`;

// export const ASIContainer = styled.div`
//   position: relative;
//   height: 50px;
//   width: 170px;
//   font-family: LCD14, monospace;
//   font-size: 48px;
//   text-align: right;
//   background-color: ${colors.DISPLAY_BLACK};
// `;
//
// export const DigitsOn = styled.div`
//   position: absolute;
//   color: ${colors.DISPLAY_WHITE};
//   text-align: right;
//   width: 100%;
//   right: 10px;
// `;
//
// export const DigitsOff = styled.div`
//   position: absolute;
//   color: ${colors.DISPLAY_WHITE};
//   opacity: 0.25;
//   text-align: right;
//   width: 100%;
//   right: 10px;
// `;
