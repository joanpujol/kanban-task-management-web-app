'use client'


import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";


const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid #000;

  @media ${breakpoints.mobile} {
    background-color: red;
  }
`;

export default Button;
