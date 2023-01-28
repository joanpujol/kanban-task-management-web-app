"use client";

import { shallow } from "zustand/shallow";
import { BoardLayout } from "../components/organisms/BoardLayout/BoardLayout";
import { useBoardStore } from "../data/store/Board.store";

export const BoardPage = () => {
  const { boardState } = useBoardStore(
    (state) => ({ boardState: state.boardState }),
    shallow
  )

  const currentBoard = boardState.boards.find(
    (board) => board.name.toLocaleLowerCase() === "platform launch"
  );

  if (!currentBoard) return null;

  return (
    <BoardLayout name={currentBoard.name} columns={currentBoard.columns} />
  )
};
