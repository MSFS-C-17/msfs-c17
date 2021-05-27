import styled from "styled-components";
import { colors } from "../../../globals/colours";

export const TQIContainer = styled.div`
  position: relative;
  height: 50px;
  width: 125px;
  font-family: "TFI LCD Mono", monospace;
  font-size: 48px;
  text-align: right;
  background-color: ${colors.DISPLAY_BLACK};
  letter-spacing: 4px;
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
