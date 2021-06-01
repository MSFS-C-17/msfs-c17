import { createGlobalStyle } from "styled-components";
import DYMOSymbols from "../../fonts/DYMOSymbols.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'DYMO Symbols';
        src: url(${DYMOSymbols});
    }
`;
