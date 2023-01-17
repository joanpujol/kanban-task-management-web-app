import styled from "styled-components";
import { StyledHeader3 } from "../../atoms/Typography/Header.styles";
import { StyledText } from "../../atoms/Typography/Text.styles";

export const TaskCardWrapper = styled.div`
  width: 280px;
  background-color: ${({ theme: { theme } }) => theme.background.primary};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);

  & ${StyledHeader3} {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  & ${StyledText} {
    color: ${({ theme }) => theme.colors.mediumGrey};
  }
`;
