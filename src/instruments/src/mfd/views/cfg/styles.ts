import styled from "styled-components";
import { colors } from "../../../../../globals/colours";

export const CFGView = styled.div`
  height: 100%;
  width: 100%;
`;

export const SVGText = styled.text`
  font-family: "Dymo Symbols", monospace;
  fill: ${({ color }) => {
    return color || colors.DISPLAY_WHITE;
  }};
  text-align: ${({ textAlign }) => textAlign || "inherit"};
  font-size: 25px;
  letter-spacing: 2px;
`;

export const SVGPolygon = styled.polygon`
  fill: ${({ color }) => {
    return color || colors.DISPLAY_WHITE;
  }};
`;

export const SVGPath = styled.path`
  fill: ${({ color }) => {
    return color || colors.DISPLAY_WHITE;
  }};
`;

export const SVGRect = styled.rect`
  fill: ${({ color }) => color || colors.DISPLAY_WHITE};
`;
