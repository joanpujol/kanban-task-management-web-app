"use client";

import { Caret } from "../Icons/Caret/Caret";
import * as S from "./Dropdown.styles";

type Props = {
  options: string[];
  name?: string;
};

// TODO Implement pseudo-select to style dropdown according to design
export const Dropdown = ({ options, name }: Props) => {
  return (
    <S.StyledDropboxWrapper>
      <S.StyledDropbox name={name}>
        {options.map((option) => (
          // eslint-disable-next-line react/jsx-key
          <option value={option}>{option}</option>
        ))}
      </S.StyledDropbox>
      <Caret />
    </S.StyledDropboxWrapper>
  );
};
