import styled from 'styled-components'
import theme1 from '../../styles/theme1';

export const HeaderBody = styled.header`
    display: flex;
    justify-content:space-between;
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
    font-size: .8125rem;
`;

export const NumberBlock = styled.div`
    display:flex;
    justify-content: space-between;
    gap:1rem;
`;
export const NumberToggle = styled.p`
    font-size: .8125rem;

`;

export const BlockToggle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 
`;
export const ToggleStyle = styled.div`
    height:1.625rem;
    width:4.375rem;
    background: ${({theme}) => theme.color.backgrounds.toggle};
    border-radius: 1rem;
`;
