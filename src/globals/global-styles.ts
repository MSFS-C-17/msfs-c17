import { createGlobalStyle } from "styled-components";
import DymoSymbols from "../fonts/DYMO Symbols.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'DYMO Symbols';
     src: url(${DymoSymbols});
  }
`;
