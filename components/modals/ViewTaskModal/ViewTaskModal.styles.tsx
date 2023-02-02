import styled from "styled-components";

export const SubtaskList = styled.div`
  & > * {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;
