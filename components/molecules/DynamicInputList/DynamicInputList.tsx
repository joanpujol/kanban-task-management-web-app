import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { Close } from "../../atoms/Icons/Close/Close";
import { TextField } from "../../atoms/TextField/TextField";

import * as S from "./DynamicInputList.styles";

type InputFields = {
  title: string;
  placeholder?: string;
}[];

export const DynamicInputList = () => {
  const [inputFields, setInputFields] = useState<InputFields>([
    { title: "", placeholder: "e.g. Make coffee" },
    { title: "", placeholder: "e.g. Drink coffee & smile" },
  ]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...inputFields];
    data[index].title = event.target.value;
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
            name={"title"}
            value={input.title}
            placeholder={input.placeholder ?? "e.g. Another subtask"}
            onChange={(event) => handleInputChange(index, event)}
          />
          <span onClick={() => removeFields(index)}>
            <Close />
          </span>
        </S.DynamicInput>
      ))}
      <Button
        onClick={() => setInputFields([...inputFields, { title: "" }])}
        variant={"secondary"}
        size={"sm"}
        stretch
      >
        +Add New Subtask
      </Button>
    </>
  );
};
