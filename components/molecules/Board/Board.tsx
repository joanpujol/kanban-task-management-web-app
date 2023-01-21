"use client";

import { Column } from "../../../data/models/Column";
import { BoardColumn } from "../BoardColumn/BoardColumn";
import * as S from "./Board.styles";

type Props = {
  columns: Column[];
};

const boardColors: `#${string}`[] = ["#49C4E5", "#F2C94C", "#F2994A", "#EB5757", "#6FCF97"];

export const Board = ({ columns }: Props) => {
  return (
    <S.StyledBoard>
      {columns.map((column, index) => (
        <BoardColumn key={column.id} name={column.name} tasks={column.tasks} color={boardColors[index % (boardColors.length - 1)]} />
      ))}
    </S.StyledBoard>
  );
};
