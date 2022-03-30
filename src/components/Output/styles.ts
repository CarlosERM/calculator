import React from 'react'
import styled from 'styled-components'

const OutputBody = styled.div`
    background-color: ${({theme}) => theme.color.backgrounds.screen};
    border-radius: .625rem;
    padding: 1.75rem 1.5rem;
    text-align: right;
    margin-bottom:1.5625rem;
`;

export default OutputBody