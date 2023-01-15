import styled from "styled-components";
import { StyledHeader3 } from "../Typography/Header.styles";

export const NavigationMenuContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

export const NavigationMenuWrapper = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing.xxl};
  cursor: pointer;

  & ${StyledHeader3} {
    color: ${({ theme }) => theme.colors.mediumGrey};
  }

  & svg {
    fill: ${({ theme }) => theme.colors.mediumGrey};
    margin-right: ${({ theme }) => theme.spacing.md};
  }

  &.active {
    margin-right: ${({ theme }) => theme.spacing.xxl};
    background-color: ${({ theme }) => theme.colors.main};
    position: relative;

    & ${StyledHeader3} {
      color: ${({ theme }) => theme.colors.white};
    }

    & svg {
      fill: ${({ theme }) => theme.colors.white};
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: ${({ theme }) => theme.spacing.lg};
      height: 100%;
      background-color: ${({ theme }) => theme.colors.main};
      border-radius: 0 ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xxl} 0;
      transform: translateX(100%);
    }
  }

  &.action {
    & ${StyledHeader3} {
      color: ${({ theme }) => theme.colors.main};
    }

    & svg {
      fill: ${({ theme }) => theme.colors.main};
    }
  }
`;
