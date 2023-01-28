"use client";

import { Task } from "../../../data/models/Task";
import { Header } from "../../atoms/Typography/Header";
import { Text } from "../../atoms/Typography/Text";
import * as S from "./TaskCard.styles";

type Props = {
  task: Task;
};

export const TaskCard = ({ task: { title, subtasks } }: Props) => {
  const subtasksCompleted = subtasks.filter(
    (subtask) => subtask.isCompleted
  ).length;
  return (
    <S.TaskCardWrapper>
      <Header size="md">{title}</Header>
      <Text size="md" bold>
        {subtasksCompleted} of {subtasks.length} subtasks
      </Text>
    </S.TaskCardWrapper>
  );
};
