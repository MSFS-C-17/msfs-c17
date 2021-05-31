import React from "react";
import { SVGText, SVGPath } from "../../../styles";
import { colors } from "../../../../../../globals/colours";
import { pad } from "../../../../../utils/number-padding";

export type TFuelFlowProps = { totalFuelFlow: number };

export const FuelFlow: React.FC<TFuelFlowProps> = ({ totalFuelFlow }) => {
  const decimalise = totalFuelFlow / 1000;
  const hundredsValue =
    Math.floor((decimalise - Math.floor(decimalise)) * 10) * 100;
  const thousandsValue = Math.floor(decimalise);

  return (
    <>
      <SVGText
        color={colors.DISPLAY_WHITE}
        transform="matrix(1 0 0 1 339.5353 112.486)"
      >
        FF PPH
      </SVGText>
      <SVGText
        fontSize={40}
        letterSpacing={0}
        textAnchor="end"
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 391 160)"
      >
        {thousandsValue > 0 && thousandsValue}
      </SVGText>
      <SVGText
        fontSize={30}
        letterSpacing={0}
        textAnchor="end"
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 446 157)"
      >
        {totalFuelFlow > 1000 ? pad(hundredsValue, 3) : hundredsValue}
      </SVGText>
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M453,168.51H339.04v-45.15H453V168.51z M342.04,165.51H450v-39.15H342.04V165.51z"
      />
    </>
  );
};
