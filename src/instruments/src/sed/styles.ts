import styled from "styled-components";
import { SVGText } from "../mfd/styles";
import { colors } from "../../../globals/colours";

export const SEDContainer = styled.div`
  background-color: ${colors.DISPLAY_BLACK};
  height: 532px;
  width: 925px;
`;

export const PrimaryTitle = styled(SVGText)`
  font-family: "DYMO Symbols";
  font-size: 46px;
  fill: ${colors.DISPLAY_WHITE};
`;

export const SecondaryTitle = styled(SVGText)`
  font-family: "DYMO Symbols";
  font-size: 46px;
  fill: ${colors.DISPLAY_WHITE};
`;

export const Value = styled(SVGText)`
  font-family: "DSEG14Classic-Regular";
  fill: ${colors.DISPLAY_WHITE};
  font-size: 67px;
  letter-spacing: 0;
`;

export const GhostValue = styled(SVGText)`
  font-family: "DSEG14Classic-Regular";
  opacity: 0.2;
  fill: ${colors.DISPLAY_WHITE};
  font-size: 67px;
  letter-spacing: 0;
`;

export const Line = styled.line`
  fill: none;
  stroke: ${colors.DISPLAY_WHITE};
  stroke-width: 3;
  stroke-miterlimit: 10;
`;
