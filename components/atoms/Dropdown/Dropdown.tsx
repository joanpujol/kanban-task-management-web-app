"use client";

import { Caret } from "../Icons/Caret/Caret";
import * as S from "./Dropdown.styles";

type Props = {
  options: string[];
  eventHandler: (value: string) => void;
};

// TODO Implement pseudo-select to style dropdown according to design
export const Dropdown = ({ options, eventHandler }: Props) => {
  return (
    <S.StyledDropboxWrapper>
      <S.StyledDropbox onChange={(e) => eventHandler(e.target.value)}>
        {options.map((option) => (
          // eslint-disable-next-line react/jsx-key
          <option value={option}>{option}</option>
        ))}
      </S.StyledDropbox>
      <Caret />
    </S.StyledDropboxWrapper>
  );
};
