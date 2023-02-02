"use client";

import { Caret } from "../Icons/Caret/Caret";
import * as S from "./Dropdown.styles";

type Props = {
  options: string[];
  selected?: string;
  name?: string;
  onChange?: (status: string) => void;
};

// TODO Implement pseudo-select to style dropdown according to design
export const Dropdown = ({ options, name, selected, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };
  return (
    <S.StyledDropboxWrapper>
      <S.StyledDropbox name={name} value={selected} onChange={handleChange}>
        {options.map((option) => (
          // eslint-disable-next-line react/jsx-key
          <option value={option}>{option}</option>
        ))}
      </S.StyledDropbox>
      <Caret />
    </S.StyledDropboxWrapper>
  );
};
