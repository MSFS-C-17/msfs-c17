import styled from "styled-components";
import { colors } from "../../../globals/colours";

export const TFIContainer = styled.div`
  position: relative;
  height: 50px;
  width: 120px;
  font-family: "TFI LCD Mono", monospace;
  font-size: 48px;
  text-align: right;
  background-color: ${colors.DISPLAY_BLACK};
  letter-spacing: 4px;
  padding: 0 16px;
`;

export const DigitsOn = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  color: ${colors.DISPLAY_WHITE};
`;

export const DigitsOff = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  color: ${colors.DISPLAY_WHITE};
  opacity: 0.25;
`;
