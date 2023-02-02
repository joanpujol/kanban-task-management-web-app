import { More } from "../../atoms/Icons/More/More";
import { Modal } from "../../atoms/Modal/Modal";
import { ModalHeader } from "../../atoms/Modal/Modal.styles";
import { Header } from "../../atoms/Typography/Header";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../molecules/Popover/Popover";
import { Text } from "../../atoms/Typography/Text";
import { Task } from "../../../data/models/Task";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";

import * as S from "./ViewTaskModal.styles";
import { ModalSection } from "../ModalSection/ModalSection";
import { getTaskStatus } from "../../molecules/TaskCard/TaskCard.utils";
import { Dropdown } from "../../atoms/Dropdown/Dropdown";
import { useBoardStore } from "../../../data/store/Board.store";
import { shallow } from "zustand/shallow";

type Props = {
  task: Task;
  open: boolean;
  setOpen: (open: boolean) => void;
};

// TODO: Fix rerender problem on checkboxes
export const ViewTaskModal = ({ task, open, setOpen }: Props) => {
  const { addNewTask, editTask, removeTask } = useBoardStore(
    (state) => ({
      addNewTask: state.addNewTask,
      editTask: state.editTask,
      removeTask: state.removeTask,
    }),
    shallow
  );
  const modifiedTask: Task = JSON.parse(JSON.stringify(task));
  const completeSubtask = (title: string, value: boolean) => {
    const subtaskIndex = modifiedTask.subtasks.findIndex(
      (subtask) => subtask.title === title
    );
    modifiedTask.subtasks[subtaskIndex].isCompleted = value;
    editTask("Platform Launch", modifiedTask);
  };
  const changeTaskStatus = (status: string) => {
    modifiedTask.status = status;
    removeTask("Platform Launch", task);
    addNewTask("Platform Launch", modifiedTask);
  };
  const deleteTask = () => {
    removeTask("Platform Launch", modifiedTask);
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <ModalHeader>
        <Header size={"xl"}>{task.title}</Header>
        <Popover>
          <PopoverTrigger>
            <More />
          </PopoverTrigger>
          <PopoverContent>
            <Text size="lg" red onClick={deleteTask}>
              Delete Task
            </Text>
          </PopoverContent>
        </Popover>
      </ModalHeader>
      <ModalSection>
        <Text size="lg" dimmed>
          {task.description}
        </Text>
      </ModalSection>
      <ModalSection title={getTaskStatus(task)}>
        <S.SubtaskList>
          {task.subtasks?.map((subtask) => (
            // eslint-disable-next-line react/jsx-key
            <Checkbox
              content={subtask.title}
              markChecked={subtask.isCompleted}
              onChange={completeSubtask}
            />
          ))}
        </S.SubtaskList>
      </ModalSection>
      <ModalSection title="Current Status">
        {/* TODO: Make these generic */}
        <Dropdown
          options={["Todo", "Doing", "Done"]}
          onChange={changeTaskStatus}
          selected={task.status}
        />
      </ModalSection>
    </Modal>
  );
};
