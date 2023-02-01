import styled from "styled-components";

export const Overlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const StyledPopover = styled.div`
  position: relative;
`;

export const PopupTrigger = styled.span`
  display: flex;
  justify-content: center;
  height: 24px;
  width: 24px;
  transform: translateX(50%);
  cursor: pointer;
`;

export const StyledPopoverContent = styled.div<{
  $open: boolean;
  $placement: string;
}>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: absolute;
  /* TODO: Create variables for these magic numbers */
  top: calc(${({ theme }) => theme.spacing.lg} + 12px);
  transform: translateX(calc(-50% + 24px));
  z-index: 3;
  background-color: ${({ theme: { theme } }) => theme.background.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);

  & > * {
    width: 160px;
    cursor: pointer;
  }
`;
