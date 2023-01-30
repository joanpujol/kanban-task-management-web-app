import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { Close } from "../../atoms/Icons/Close/Close";
import { TextField } from "../../atoms/TextField/TextField";

import * as S from "./DynamicInputList.styles";

type InputFields = {
  subtaskTitle: string;
  placeholder?: string;
}[];

export const DynamicInputList = () => {
  const [inputFields, setInputFields] = useState<InputFields>([
    { subtaskTitle: "", placeholder: "e.g. Make coffee" },
    { subtaskTitle: "", placeholder: "e.g. Drink coffee & smile" },
  ]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...inputFields];
    data[index].subtaskTitle = event.target.value;
    setInputFields(data);
  };

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <>
      {inputFields.map((input, index) => (
        <S.DynamicInput key={index}>
          <TextField
            name={"subtaskTitle"}
            value={input.subtaskTitle}
            placeholder={input.placeholder ?? "e.g. Another subtask"}
            onChange={(event) => handleInputChange(index, event)}
          />
          <span onClick={() => removeFields(index)}>
            <Close />
          </span>
        </S.DynamicInput>
      ))}
      <Button
        onClick={() => setInputFields([...inputFields, { subtaskTitle: "" }])}
        variant={"secondary"}
        size={"sm"}
        stretch
      >
        +Add New Subtask
      </Button>
    </>
  );
};
