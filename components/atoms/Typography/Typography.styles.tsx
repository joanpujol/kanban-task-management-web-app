import styled from "styled-components";

export const Heading = ($size: 's' | 'm' | 'l' | 'xl') => {
  const headings = {
    xl: styled.h1`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    `,
    l: styled.h2`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
    `,
    m: styled.h3`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
    `,
    s: styled.h4`
      color: ${({ theme }) => theme.colors.mediumGrey};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 2.4px;
    `,
  };
  return headings[$size];
};

export const Body = ($size: 'm' | 'l') => {
  const bodies = {
    l: styled.p`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
    `,
    m: styled.p`
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    `,
  };
  return bodies[$size];
};
