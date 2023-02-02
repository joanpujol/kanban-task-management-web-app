import { Task } from "../../../data/models/Task";
import { useBoardStore } from "../../../data/store/Board.store";
import Button from "../../atoms/Button/Button";
import { Dropdown } from "../../atoms/Dropdown/Dropdown";
import { Modal } from "../../atoms/Modal/Modal";
import { TextField } from "../../atoms/TextField/TextField";
import { Header } from "../../atoms/Typography/Header";
import { DynamicInputList } from "../../molecules/DynamicInputList/DynamicInputList";
import { FormItem } from "../../molecules/FormItem/FormItem";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type FormSubmissionObj = {
  title: string;
  description: string;
  subtaskTitles: string[];
  status: string;
};

export const AddNewTaskModal = ({ open, setOpen }: Props) => {
  const { addNewTask } = useBoardStore((state) => ({
    addNewTask: state.addNewTask,
  }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const elementsLength = elements.length;
    let newTask: Partial<FormSubmissionObj> = {
      subtaskTitles: [],
    };
    for (let i = 0; i < elementsLength; i++) {
      const element = elements[i] as HTMLInputElement;
      if (element.name === "subtaskTitle") {
        newTask.subtaskTitles?.push(element.value);
      }
      if (
        element.name === "title" ||
        element.name === "description" ||
        element.name === "status"
      ) {
        newTask[element.name] = element.value;
      }
    }
    const subtasks = newTask["subtaskTitles"]?.map((subtask) => ({
      title: subtask,
      isCompleted: false,
    }));
    addNewTask("Platform Launch", {
      title: newTask["title"],
      description: newTask["description"],
      status: newTask["status"],
      subtasks,
    } as Task);
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit}>
        <Header size={"xl"}>Add New Task</Header>
        <FormItem name={"title"}>
          <TextField />
        </FormItem>
        <FormItem name={"description"}>
          <TextField />
        </FormItem>
        <FormItem name={"subtasks"}>
          <DynamicInputList />
        </FormItem>
        <FormItem name={"status"}>
          {/* TODO: Make these generic */}
          <Dropdown options={["Todo", "Doing", "Done"]} />
        </FormItem>
        <Button variant={"primary"} size={"sm"} type={"submit"} stretch>
          Create Task
        </Button>
      </form>
    </Modal>
  );
};
