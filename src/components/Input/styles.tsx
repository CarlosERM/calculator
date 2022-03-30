import React from 'react'
import styled from 'styled-components'

const InputBody = styled.div`
    background-color: ${({theme}) => theme.color.backgrounds.toggle};
    border-radius: .625rem;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: .8125rem;
    grid-row-gap: 1.0625rem;
    transition: all 0.50s linear;

`;

export default InputBody;