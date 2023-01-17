import { Task } from "../../../data/models/Task";
import { Circle } from "../../atoms/Icons/Circle/Circle";
import { Header } from "../../atoms/Typography/Header";
import { TaskCard } from "../TaskCard/TaskCard";

import * as S from "./BoardColumn.styles";

type Props = {
  name: string;
  tasks: Task[];
};

export const BoardColumn = ({ name, tasks }: Props) => {
  return (
    <S.BoardColumnWrapper>
      <S.BoardColumnHeader>
        <Circle fillColor="#49C4E5" />
        <Header size="sm">{name}</Header>
      </S.BoardColumnHeader>
      <S.BoardColumnBody>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </S.BoardColumnBody>
    </S.BoardColumnWrapper>
  );
};
