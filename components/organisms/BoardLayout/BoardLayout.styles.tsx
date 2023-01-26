import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const StyledBoardLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 97px 1fr;

  @media ${breakpoints.tablet} {
    grid-template-columns: 261px 1fr;
    grid-template-rows: 81px 1fr;
  }

  /* TODO: Mobile res */
`;

export const BoardLayoutMenu = styled.div`
  grid-column: 1 / 2;
  grid-row: span 2;
  background-color: ${({ theme: { theme } }) => theme.background.primary};
  border-right: 1px solid ${({ theme: { theme } }) => theme.border.primary};
`;

export const BoardLayoutHeader = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme: { theme } }) => theme.background.primary};
  border-bottom: 1px solid ${({ theme: { theme } }) => theme.border.primary};
`;

export const BoardLayoutHeaderActions = styled.div`
  margin-left: auto;
`;

export const BoardLayoutBoard = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: ${({ theme: { theme } }) => theme.background.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
`;
