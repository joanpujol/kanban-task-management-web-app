"use client"

import { Column } from "../../../data/models/Column";
import { Board } from "../Board/Board";
import * as S from "./BoardLayout.styles";

type Props = {
  columns: Column[];
};

export const BoardLayout = ({ columns }: Props) => {
  return (
    <S.StyledBoardLayout>
      <S.BoardLayoutMenu>Menu</S.BoardLayoutMenu>
      <S.BoardLayoutHeader>Header</S.BoardLayoutHeader>
      <S.BoardLayoutBoard>
        <Board columns={columns} />
      </S.BoardLayoutBoard>
    </S.StyledBoardLayout>
  );
};
