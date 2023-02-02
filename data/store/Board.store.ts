import { create } from 'zustand'
import produce from "immer";
import boardState from '../mock/data.json'
import { Task } from '../models/Task';
import { Board } from '../models/Board';
import { Column } from '../models/Column';

export type BoardStore = {
  boardState: typeof boardState;
  addNewTask: (boardName: string, task: Task) => void;
  editTask: (boardName: string, task: Task) => void;
  removeTask: (boardName: string, task: Task) => void;
  moveTask: (boardName: string, task: Task) => void;
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
  editTask: (boardName: string, task: Task) => set(
    produce((state) => {
      const boardIndex = state.boardState.boards.findIndex((board: Board) => board.name === boardName)
      const columnIndex = state.boardState.boards[boardIndex].columns.findIndex((column: Column) => column.name === task.status)
      const taskIndex = state.boardState.boards[boardIndex].columns[columnIndex].tasks.findIndex((t: Task) => t.title === task.title)
      state.boardState.boards[boardIndex].columns[columnIndex].tasks[taskIndex] = task
    }
    )),
  removeTask: (boardName: string, task: Task) => set(
    produce((state) => {
      const boardIndex = state.boardState.boards.findIndex((board: Board) => board.name === boardName)
      const columnIndex = state.boardState.boards[boardIndex].columns.findIndex((column: Column) => column.name === task.status)
      const taskIndex = state.boardState.boards[boardIndex].columns[columnIndex].tasks.findIndex((t: Task) => t.title === task.title)
      state.boardState.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1)
    }
    )),
  moveTask: (boardName: string, task: Task) => set(
    produce((state) => {
      const boardIndex = state.boardState.boards.findIndex((board: Board) => board.name === boardName)
      state.removeTask(boardName, task)
      const newColumnIndex = state.boardState.boards[boardIndex].columns.findIndex((column: Column) => column.name === task.status)
      state.boardState.boards[boardIndex].columns[newColumnIndex].tasks.push(task)
    }
    )),
}))
