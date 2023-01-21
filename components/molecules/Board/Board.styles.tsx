import styled from "styled-components";

export const StyledBoard = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.lg};
  grid-auto-flow: column;
  grid-auto-columns: 280px;
`;
