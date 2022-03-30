import React from 'react'
import styled from 'styled-components';

const KeyNumBody = styled.button`
    background-color: ${({theme}) => theme.color.keys.normalKeyBackground};
    padding: 1.25rem;
    border:none;
    font-size: 1.9375rem;
`;

export default KeyNumBody;