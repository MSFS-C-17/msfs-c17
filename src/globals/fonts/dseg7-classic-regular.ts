import { createGlobalStyle } from "styled-components";
import DSEG7ClassicRegular from "../../fonts/dseg7-classic-regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'DSEG7Classic-Regular';
        src: url(${DSEG7ClassicRegular});
    }
`;
