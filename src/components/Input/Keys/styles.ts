import React from 'react'
import styled from 'styled-components';

export const KeyNumBody = styled.button`
    background-color: ${({theme}) => theme.color.keys.normalKeyBackground};
    padding-top: 1rem;
    padding-bottom:.5625rem;
    padding-left: .4375rem;

    border:none;
    font-size: 1.8125rem;
    box-shadow: 0rem .25rem ${({theme}) => theme.color.keys.normalKeyShadow} ;
    font-weight: 700;
    border-radius: .3125rem;
    font-family: 'Spartan', sans-serif;
    color: ${({theme}) => theme.color.text.primaryColor};
`;


export const KeyDelResetBody = styled(KeyNumBody)`
    background-color: ${({theme}) => theme.color.keys.delResetKeyBackground};
    box-shadow: 0rem .25rem ${({theme}) => theme.color.keys.delResetKeyShadow} ;
    font-size:1.0625rem;
    color: white;
`;


export const KeyResetBody = styled(KeyDelResetBody)`
    grid-column: span 2;
    font-size:1.0625rem;
    text-transform: uppercase;
`