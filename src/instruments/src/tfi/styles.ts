import styled from "styled-components";
import { colors } from "../../../globals/colours";

export const TFIContainer = styled.div`
  height: 50px;
  width: 168px;
  font-family: "Digital Display", monospace;
  font-size: 48px;
  text-align: right;
  background-color: ${colors.DISPLAY_BLACK};
  color: ${colors.DISPLAY_WHITE};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
`;
