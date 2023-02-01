"use client";

import styled, { css } from "styled-components";
import { TypographySize } from "./Typography.types";

export const getTextStyles = (size: Extract<TypographySize, "md" | "lg">) => {
  const textStyles = {
    lg: css`
      font-size: 13px;
      line-height: 23px;
    `,
    md: css`
      font-size: 12px;
      line-height: 15px;
    `,
  };
  return textStyles[size];
};

export const StyledText = styled.p<{
  $size: "md" | "lg";
  $bold?: boolean;
  $dimmed?: boolean;
  $red?: boolean;
}>`
  color: ${({ theme, $dimmed, $red }) => {
    if ($red) {
      return theme.colors.red;
    }
    return $dimmed ? theme.colors.mediumGrey : theme.colors.darkGrey;
  }};
  font-weight: ${({ $bold }) => ($bold ? 700 : 500)};
  margin: 0;
  ${({ $size }) => getTextStyles($size)}
`;
