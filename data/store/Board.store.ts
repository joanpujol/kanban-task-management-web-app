import { create } from 'zustand'
import produce from "immer";
import boardState from '../mock/data.json'
import { Task } from '../models/Task';

export type BoardStore = {
    boardState: typeof boardState;
    addNewTask: (boardName: string, task: Task) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boardState: boardState,
  addNewTask: (boardName: string, task: Task) => set(
    produce((draft) => {
      draft.boardState[boardName].push(task)
    })
  ),
}))
