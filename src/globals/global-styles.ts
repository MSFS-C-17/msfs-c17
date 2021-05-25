import { createGlobalStyle } from "styled-components";
import HoneywellMCDU from "../fonts/HoneywellMCDU.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'Honeywell MCDU';
     src: url(${HoneywellMCDU});
  }
`;
