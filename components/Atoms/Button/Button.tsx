'use client'


import styled from "styled-components";


const Button = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid #000;
`;

export default Button;
