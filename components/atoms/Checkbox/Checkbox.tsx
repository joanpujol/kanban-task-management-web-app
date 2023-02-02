"use client";

import { useState } from "react";
import * as S from "./Checkbox.styles";
import { Check } from "../Icons/Check/Check";

type Props = {
  content: string;
  markChecked?: boolean;
  onChange?: (title: string, value: boolean) => void;
};

export const Checkbox = ({ content, markChecked, onChange }: Props) => {
  const [checked, setChecked] = useState(markChecked ?? false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(content, event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <S.CheckboxContainer>
          <S.HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
          <S.StyledCheckbox $checked={checked}>
            <S.CheckIconWrapper $checked={checked}>
              <Check />
            </S.CheckIconWrapper>
          </S.StyledCheckbox>
          <S.CheckboxSpan $checked={checked}>{content}</S.CheckboxSpan>
        </S.CheckboxContainer>
      </label>
    </div>
  );
};
