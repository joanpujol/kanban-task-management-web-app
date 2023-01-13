"use client";

import { useState } from "react";
import * as S from "./Checkbox.styles";
import { Check } from "../Icons/Check/Check";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
        <S.StyledCheckbox $checked={checked}>
          <Check />
        </S.StyledCheckbox>
        <S.CheckboxSpan $checked={checked}>Completed</S.CheckboxSpan>
      </S.CheckboxContainer>
    </label>
  );
};

export default Checkbox;
