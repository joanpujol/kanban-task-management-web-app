import styled from "styled-components";
import { TypographySize } from "./Typography.types";

export const Heading = ($size: TypographySize) => {
  const headings = {
    xl: styled.h1`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    `,
    lg: styled.h2`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
    `,
    md: styled.h3`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
    `,
    sm: styled.h4`
      color: ${({ theme }) => theme.colors.mediumGrey};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 2.4px;
    `,
  };
  return headings[$size];
};

export const Body = ($size: Extract<TypographySize, 'md' | 'lg'>, $bold?: boolean) => {
  const bodies = {
    lg: styled.p`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: ${$bold ? 700 : 500};
      font-size: 13px;
      line-height: 23px;
    `,
    md: styled.p`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    `,
  };
  return bodies[$size];
};
