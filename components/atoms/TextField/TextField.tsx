"use client";

type Props = {
    name: string;
    placeholder?: string;
};

import * as S from "./TextField.styles";

export const TextField = ({ name, placeholder }: Props) => {
  return (
    <S.StyledTextField type="text" name={name} placeholder={placeholder ?? "Your text goes here"} />
  )
};
