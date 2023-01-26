"use client";

import { useState } from "react";
import { Column } from "../../../data/models/Column";
import Button from "../../atoms/Button/Button";
import { Header } from "../../atoms/Typography/Header";
import { AddNewTaskModal } from "../AddNewTaskModal/AddNewTaskModal";
import { Board } from "../../molecules/Board/Board";
import * as S from "./BoardLayout.styles";

type Props = {
  columns: Column[];
};

export const BoardLayout = ({ columns }: Props) => {
  const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);
  return (
    <>
      <S.StyledBoardLayout>
        <S.BoardLayoutMenu>Menu</S.BoardLayoutMenu>
        <S.BoardLayoutHeader>
          <Header size={"xl"}>Board Name</Header>
          <S.BoardLayoutHeaderActions>
            <Button
              variant={"primary"}
              size={"sm"}
              onClick={() => setIsAddNewTaskModalOpen(true)}
            >
              +Add New Task
            </Button>
          </S.BoardLayoutHeaderActions>
        </S.BoardLayoutHeader>
        <S.BoardLayoutBoard>
          <Board columns={columns} />
        </S.BoardLayoutBoard>
      </S.StyledBoardLayout>
      <AddNewTaskModal
        open={isAddNewTaskModalOpen}
        setOpen={setIsAddNewTaskModalOpen}
      />
    </>
  );
};
