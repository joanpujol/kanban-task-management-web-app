import styled from "styled-components";
import { getTextStyles } from "../Typography/Text.styles";

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  background: ${({ theme: { theme } }) => theme.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryHover}};
  }
`
  
export const CheckboxSpan = styled.span<{$checked: boolean}>`
  ${getTextStyles("md")}

  ${({ $checked, theme: { theme } }) => $checked && `
    & {
      color: ${theme.text.primaryDimmed};
      text-decoration-line: line-through;
    }
  `}
`

export const StyledCheckbox = styled.div<{$checked: boolean}>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({$checked, theme}) => $checked ? theme.colors.main : theme.colors.white};
  border-radius: ${({theme}) => theme.borderRadius.sm};
  margin-right: ${({theme}) => theme.spacing.md}};
  border: 1px solid ${({theme}) => theme.colors.mediumGreyDimmed};

  & > svg {
    visibility: ${({$checked}) => $checked ? 'visible' : 'hidden'}
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  position: absolute;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  overflow: hidden;
  white-space: nowrap;
`
