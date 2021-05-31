import { createGlobalStyle } from "styled-components";
import TFILCDMono from "../../fonts/TFILCDMono.ttf";

export const TFILCDMonoFont = createGlobalStyle`
  @font-face {
    font-family: 'TFILCDMono';
    src: url(${TFILCDMono});
  }
`;
