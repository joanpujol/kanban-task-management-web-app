import { create } from 'zustand'
import produce from "immer";
import boardState from '../mock/data.json'
import { Task } from '../models/Task';
import { Board } from '../models/Board';
import { Column } from '../models/Column';

export type BoardStore = {
  boardState: typeof boardState;
  addNewTask: (boardName: string, task: Task) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boardState: boardState,
  addNewTask: (boardName: string, task: Task) => set(
    produce((state) => {
      const boardIndex = state.boardState.boards.findIndex((board: Board) => board.name === boardName)
      const columnIndex = state.boardState.boards[boardIndex].columns.findIndex((column: Column) => column.name === task.status)
      state.boardState.boards[boardIndex].columns[columnIndex].tasks.push(task)
    })
  ),
}))
