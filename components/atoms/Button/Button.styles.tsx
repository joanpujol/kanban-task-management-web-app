import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariant } from "./Button.types";
import { ThemeInterface } from "../../../styles/theme";

const getButtonVariants = ({ colors, theme }: ThemeInterface) => {
  const variants = {
    primary: css`
      background-color: ${theme.button.color.primary};
      & > * {
        color: ${colors.white};
      }
      &:hover {
        background-color: ${theme.button.hover.primary};
      }
    `,
    secondary: css`
      background-color: ${theme.button.color.secondary};
      & > * {
        color: ${colors.main};
      }
      &:hover {
        background-color: ${theme.button.hover.secondary};
      }
    `,
    destructive: css`
      background-color: ${theme.button.color.destructive};
      & > * {
        color: ${colors.white};
      }
      &:hover {
        background-color: ${theme.button.hover.destructive};
      }
    `,
  };
  return variants;
};

const buttonSizes = {
  lg: css`
    height: 48px;
    border-radius: 24px;
  `,
  sm: css`
    height: 40px;
    border-radius: 20px;
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $stretch?: boolean;
}>`
  width: ${({ $stretch }) => ($stretch ? "100%" : "auto")};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border: none;
  ${({ theme, $variant, $size }) => css`
    ${getButtonVariants(theme)[$variant]}
    ${buttonSizes[$size]}
  `}
  &:hover {
    cursor: pointer;
  }
`;
