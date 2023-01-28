export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type Task = {
  title: string;
  description: string;
  subtasks: Subtask[];
  status: string;
}
