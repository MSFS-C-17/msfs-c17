import styled, { css } from "styled-components";
import { colors } from "../../../globals/colours";

export const MFDContainer = styled.div`
  background-color: ${colors.DISPLAY_BLACK};
  filter: ${({ brightness, contrast }) =>
    css`brightness(${brightness}%) contrast(${contrast}%)`};
  height: 1280px;
  width: 1280px;
  font-family: "DYMO Symbols A", monospace;
  color: ${colors.DISPLAY_WHITE};
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
