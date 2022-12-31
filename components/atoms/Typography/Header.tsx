import { TypographySize } from "./Typography.types";
import * as S from "./Header.styles";
import React from "react";

type Props = {
  size: TypographySize;
  children: React.ReactNode;
};

export const Header = ({ size, children }: Props) => {
  const headers = {
    xl: S.StyledHeader1,
    lg: S.StyledHeader2,
    md: S.StyledHeader3,
    sm: S.StyledHeader4,
  };
  return React.createElement(headers[size], {}, children);
};
