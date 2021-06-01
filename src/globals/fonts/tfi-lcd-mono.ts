import { createGlobalStyle } from "styled-components";
import TFILCDMono from "../../fonts/TFILCDMono.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'TFILCDMono';
    src: url(${TFILCDMono});
  }
`;
