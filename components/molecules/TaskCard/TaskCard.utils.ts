import { Task } from "../../../data/models/Task"

export const getTaskStatus = (task: Task) => {
  const completedTasks = task.subtasks?.filter((subtask) => subtask.isCompleted).length
  const totalTasks = task.subtasks?.length
  return `Subtasks (${completedTasks} of ${totalTasks})`
}
