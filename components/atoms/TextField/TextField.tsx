"use client";

type Props = {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import * as S from "./TextField.styles";

export const TextField = ({ name, placeholder, value, onChange }: Props) => {
  return (
    <S.StyledTextField
      type="text"
      name={name}
      placeholder={placeholder ?? "Your text goes here"}
      value={value}
      onChange={onChange}
    />
  );
};
