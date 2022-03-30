import React from 'react'
import { useMyContext } from '../../context';
import { BlockToggle, HeaderBody, HeaderTitle, NumberBlock, NumberToggle, TextToggle, ThemeToggle, ToggleBall, ToggleStyle } from './style';

const Header = () => {
  const { handleToggle} =  useMyContext();
  
  return (
    <HeaderBody>
        <HeaderTitle>calc</HeaderTitle>
        <ThemeToggle>
            <TextToggle>Theme</TextToggle>
            <BlockToggle onClick={handleToggle}>
                <NumberBlock>
                    <NumberToggle>1</NumberToggle>
                    <NumberToggle>2</NumberToggle>
                    <NumberToggle>3</NumberToggle>
                </NumberBlock>
                <ToggleStyle>
                  <ToggleBall className={"feijão"} />
                </ToggleStyle>
            </BlockToggle>
        </ThemeToggle>
    </HeaderBody>
  )
}

export default Header;