import React from 'react'
import styled from 'styled-components'

const InputBody = styled.div`
    background-color: ${({theme}) => theme.color.backgrounds.toggle};
    border-radius: .625rem;
    padding: 1.5625rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export default InputBody;