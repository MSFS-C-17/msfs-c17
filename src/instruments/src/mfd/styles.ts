import styled, { css } from "styled-components";
import { colors } from "../../../globals/colours";

export const MFDContainer = styled.div`
  background-color: ${colors.DISPLAY_BLACK};
  filter: ${({ brightness, contrast }) =>
    css`brightness(${brightness}%) contrast(${contrast}%)`};
  height: 800px;
  width: 800px;
  font-family: "DYMO Symbols", monospace;
  color: ${colors.DISPLAY_WHITE};
`;
