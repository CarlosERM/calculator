import styled from 'styled-components'
import theme1 from '../../styles/theme1';

export const HeaderBody = styled.header`
    display: flex;
    justify-content:space-between;
    margin-bottom:2rem;
    color: ${({theme}) => theme.color.text.headerColor};
    transition: all 0.50s linear;

`;

export const HeaderTitle = styled.h1`
    font-weight:700;
`;

export const ThemeToggle = styled.div`
    display:flex;
    align-items:end;
    gap:1.5rem;
`;

export const TextToggle = styled.p`
    text-transform: uppercase;
    font-size: .76rem;
    margin-bottom: .375rem;
`;

export const NumberBlock = styled.div`
    display:flex;
    justify-content: space-between;
    gap:1rem;
    margin-top: -.3125rem;
`;

export const NumberToggle = styled.p`
    font-size: .8125rem;
`;

export const BlockToggle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 
    gap:.25rem;
    cursor: pointer;
`;

export const ToggleStyle = styled.div`
    height:1.625rem;
    width:4.375rem;
    background: ${({theme}) => theme.color.backgrounds.toggle};
    transition: all 0.50s linear;

    border-radius: 1rem;
    /* padding: .1875rem; */
    position:relative;
`;

export const ToggleBall = styled.div`
    width:.9375rem;
    height: .9375rem;
    background-color: ${({theme}) => theme.color.keys.equalKeyBackground};
    transition: all 0.50s linear;

    border-radius: 50%;
    margin: auto 0;
    position:relative;
    top:50%;
    left: .3125rem;
    transform: translateY(-50%);
`;