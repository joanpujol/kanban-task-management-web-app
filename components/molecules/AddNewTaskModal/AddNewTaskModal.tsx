import { Modal } from "../../atoms/Modal/Modal";
import { Header } from "../../atoms/Typography/Header";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export const AddNewTaskModal = ({open, setOpen}: Props) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Header size={"xl"}>
        Add New Task
      </Header>
    </Modal>
  );
};
