import styled from "styled-components";
import { StyledHeader4 } from "../../atoms/Typography/Header.styles";

const spaceBetweenTasks = 20;

export const BoardColumnWrapper = styled.div`
  width: 280px;
  background-color: ${({ theme: { theme } }) => theme.background.secondary};
`;

export const BoardColumnHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  & > ${StyledHeader4} {
    margin-left: 12px;
  }
`;

export const BoardColumnBody = styled.div`
  & > * {
    margin-bottom: ${spaceBetweenTasks}px;
  }
`;
