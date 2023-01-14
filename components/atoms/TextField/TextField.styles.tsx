import styled from "styled-components";

import { getTextStyles } from "../Typography/Text.styles";

export const StyledTextField = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGreyDimmed};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;

  ${getTextStyles("lg", false)}

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryVeryDimmed};
  };

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.mediumGreyDimmed};
  };

  &:invalid {
    border: 1px solid ${({ theme }) => theme.colors.red};

    &::before {
      content: "Can't be empty";
      color: ${({ theme }) => theme.colors.red};
      position: absolute;
      top: ${({ theme }) => theme.spacing.sm};
      right: ${({ theme }) => theme.spacing.sm};
    }
  };
`
