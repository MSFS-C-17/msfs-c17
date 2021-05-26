import { createGlobalStyle } from "styled-components";
import DymoSymbols from "../fonts/DYMO Symbols.ttf";
import DigitalDisplay from "../fonts/digital display tfb.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'DYMO Symbols';
     src: url(${DymoSymbols});
  }
  @font-face {
    font-family: 'Digital Display';
    src: url(${DigitalDisplay});
  }
`;
