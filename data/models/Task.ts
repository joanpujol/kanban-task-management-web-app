export type Subtask = {
  title: string;
  done: boolean;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  subtasks: Subtask[];
}
