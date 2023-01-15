"use client";

import { Board } from "../Icons/Board/Board";
import { Header } from "../Typography/Header";
import * as S from "./NavigationMenu.styles";

type Props = {
  isActive?: boolean;
  isAction?: boolean;
  children?: React.ReactNode;
  handleClick?: () => void;
};

const getNavigationMenuClass = (isActive: boolean, isAction: boolean) => {
  if (isAction) return "action";
  if (isActive) return "active";
  return "";
};

export const NavigationMenu = ({
  isActive,
  isAction,
  children,
  handleClick,
}: Props) => {
  return (
    <S.NavigationMenuWrapper
      className={getNavigationMenuClass(isActive ?? false, isAction ?? false)}
      onClick={handleClick}
    >
      <S.NavigationMenuContent>
        <Board />
        <Header size={"md"}>{children}</Header>
      </S.NavigationMenuContent>
    </S.NavigationMenuWrapper>
  );
};
