import { createGlobalStyle } from "styled-components";
import DymoSymbols from "../fonts/DYMOSymbols.ttf";
import TFILCDMono from "../fonts/TFILCDMono.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'DYMO Symbols';
     src: url(${DymoSymbols});
  }
  
  @font-face {
    font-family: 'TFI LCD Mono';
    src: url(${TFILCDMono});
  }
`;
