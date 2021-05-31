import React from "react";
import { SVGText, SVGPath } from "../../../styles";
import { colors } from "../../../../../../globals/colours";

export type TFuelFlowProps = { fuelFlow: number };

export const FuelFlow: React.FC<TFuelFlowProps> = ({ fuelFlow }) => {
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
        textAnchor="end"
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 393 160)"
      >
        21
      </SVGText>
      <SVGText
        fontSize={30}
        textAnchor="end"
        color={colors.DISPLAY_GREEN}
        transform="matrix(1 0 0 1 445 155)"
      >
        700
      </SVGText>
      <SVGPath
        color={colors.DISPLAY_WHITE}
        d="M453,168.51H339.04v-45.15H453V168.51z M342.04,165.51H450v-39.15H342.04V165.51z"
      />
    </>
  );
};
