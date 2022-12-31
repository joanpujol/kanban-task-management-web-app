import styled from "styled-components";

export const StyledHeader1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

export const StyledHeader2 = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
`;

export const StyledHeader3 = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
`;

export const StyledHeader4 = styled.h4`
  color: ${({ theme }) => theme.colors.mediumGrey};
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
`;
