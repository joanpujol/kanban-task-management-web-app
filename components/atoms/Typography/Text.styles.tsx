'use client'

import styled, { css } from "styled-components";
import { TypographySize } from "./Typography.types";

export const getTextStyles = (
  size: Extract<TypographySize, "md" | "lg">,
  bold: boolean | undefined
) => {
  const textStyles = {
    lg: css`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: ${bold ? 700 : 500};
      font-size: 13px;
      line-height: 23px;
    `,
    md: css`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    `,
  };
  return textStyles[size];
};

export const StyledText = styled.p<{ $size: "md" | "lg", $bold?: boolean }>`
    margin: 0;
    ${({ $size, $bold }) => getTextStyles($size, $bold)}
`;
