"use client";

import React from "react";
import * as S from "./FormItem.styles";

type Props = {
  name: string;
  children: React.ReactNode;
};

export const FormItem = ({ name, children }: Props) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <S.StyledFormItem>
      <S.StyledText>{capitalizedName}</S.StyledText>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          name,
        });
      })}
    </S.StyledFormItem>
  );
};
