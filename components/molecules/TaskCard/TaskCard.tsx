"use client";

import { useState } from "react";
import { Task } from "../../../data/models/Task";
import { Header } from "../../atoms/Typography/Header";
import { Text } from "../../atoms/Typography/Text";
import { ViewTaskModal } from "../../modals/ViewTaskModal/ViewTaskModal";
import { getTaskStatus } from "./TaskCard.utils";
import * as S from "./TaskCard.styles";

type Props = {
  task: Task;
};

export const TaskCard = ({ task }: Props) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  return (
    <>
      <S.TaskCardWrapper
        onClick={() => {
          setIsTaskModalOpen(true);
          setSelectedTask(task);
        }}
      >
        <Header size="md">{task.title}</Header>
        <Text size="md" bold>
          {getTaskStatus(task)}
        </Text>
      </S.TaskCardWrapper>
      {selectedTask && (
        <ViewTaskModal
          task={selectedTask}
          open={isTaskModalOpen}
          setOpen={setIsTaskModalOpen}
        />
      )}
    </>
  );
};
