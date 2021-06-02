import styled from "styled-components";
import { colors } from "../../../globals/colours";

export const TFIContainer = styled.div`
  position: relative;
  height: 41px;
  width: 130px;
  font-family: "DSEG7Classic-Regular";
  font-size: 30px;
  text-align: right;
  background-color: ${colors.DISPLAY_BLACK};
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
