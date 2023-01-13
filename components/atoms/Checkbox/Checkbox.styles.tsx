import styled from "styled-components";
import { textStylesMd } from "../Typography/Text.styles";

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: red;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(99, 95, 199, 0.25);
  }
`
  
export const CheckboxSpan = styled.span<{$checked: boolean}>`
  ${textStylesMd}

  ${({ $checked }) => $checked && `
    /* TODO: Refactor to work in dark mode  */
    & {
      color: rgba(0, 0, 18, 0.5);
      text-decoration-line: line-through;
    }
  `}
`

export const StyledCheckbox = styled.div<{$checked: boolean}>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({$checked, theme}) => $checked ? theme.colors.main : theme.colors.white};
  border-radius: 2px;
  margin-right: 16px;
  border: 1px solid rgba(130, 143, 163, 0.25);

  & > svg {
    visibility: ${({$checked}) => $checked ? 'visible' : 'hidden'}
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
