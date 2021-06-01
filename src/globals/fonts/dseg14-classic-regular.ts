import { createGlobalStyle } from "styled-components";
import DSEG14ClassicRegular from "../../fonts/dseg14-classic-regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'DSEG 14 CLassic Regular';
        src: url(${DSEG14ClassicRegular});
    }
`;
