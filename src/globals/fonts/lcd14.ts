import { createGlobalStyle } from "styled-components";
import LCD14 from "../../fonts/LCD14.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'LCD14';
        src: url(${LCD14});
    }
`;
