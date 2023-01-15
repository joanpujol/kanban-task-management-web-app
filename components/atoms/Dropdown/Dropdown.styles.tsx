import styled from "styled-components";
import { getTextStyles } from "../Typography/Text.styles";

export const StyledDropboxWrapper = styled.div`
  width: 100%;
  position: relative;

  & svg {
    position: absolute;
    top: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    pointer-events: none;
  }

  &::before {
    display: block;
    position: absolute;
    height: 100%;
    right: 0;
    width: ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    pointer-events: none;
  }
`;

export const StyledDropbox = styled.select`
  ${getTextStyles("lg", false)}

  width: 100%;
  height: 100%;
  color: ${({ theme: { theme } }) => theme.text.primary};
  background-color: ${({ theme: { theme } }) => theme.background.primary};
  padding: ${({ theme }) => theme.spacing.xs}
    calc(
      ${({ theme }) => theme.spacing.xl} + ${({ theme }) => theme.spacing.md}
    )
    ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.mediumGreyDimmed};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.main};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.main};
  }

  & option {
    color: ${({ theme: { theme } }) => theme.text.secondary};
    background-color: ${({ theme: { theme } }) => theme.background.primary};
  }
`;
