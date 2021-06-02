import styled from "styled-components";
import { colors } from "../../../globals/colours";
import React from "react";

export const Container = styled.div`
  position: relative;
  width: 512px;
  height: 102px;
  font-family: "DSEG14Classic-Regular", monospace;
  background-color: ${colors.DISPLAY_BLACK};
  display: flex;
`;

export const DigitsWrapper = styled.div`
  position: relative;
  width: 395px;
  margin: 0 auto;
`;

export const DigitsOn = styled.div`
  position: absolute;
  color: ${colors.DISPLAY_WHITE};
  text-align: right;
  width: 100%;
  right: 10px;
  margin-top: 6px;
`;

export const DigitsOff = styled.div`
  position: absolute;
  color: ${colors.DISPLAY_WHITE};
  opacity: 0.1;
  text-align: right;
  width: 100%;
  right: 10px;
  margin-top: 6px;
`;

export const BigDigits = styled.span`
  font-size: 100px;
  line-height: 0.8;
  vertical-align: text-top;
`;

export const SmallDigits = styled.span`
  font-size: 75px;
  vertical-align: text-top;
  line-height: 0.8;
`;

const DecimalRect = styled.rect`
  fill: rgb(255, 255, 255);
`;
