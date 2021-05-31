import styled from "styled-components";
import * as LCD from "../components/lcd-common";

export const APPRContainer = styled(LCD.Container)`
  width: 512px;
  height: 102px;
`;

export const DigitsWrapper = styled(LCD.DigitsWrapper)`
  width: 165px;
`;

export const BigDigits = styled(LCD.BigDigits)`
  letter-spacing: 4px;
  margin-right: -4px;
`;
