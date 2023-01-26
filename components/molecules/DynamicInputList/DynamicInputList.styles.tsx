import styled from "styled-components";
import { CloseIcon } from "../../atoms/Icons/Close/Close.styles";

export const DynamicInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  & ${CloseIcon} {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.spacing.md};
  }
`;
