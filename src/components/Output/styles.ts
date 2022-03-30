import React from 'react'
import styled from 'styled-components'

const OutputBody = styled.input`
    background-color: ${({theme}) => theme.color.backgrounds.screen};
    border-radius: .625rem;
    padding: 1.5938rem 1.5rem;
    font-family: 'Spartan', sans-serif !important;
    font-size:1.9375rem;

    font-weight: 700;
    color: white;
    text-align: right;
    margin-bottom:1.5rem;
    border: none;
    width:100%;
`;

export default OutputBody