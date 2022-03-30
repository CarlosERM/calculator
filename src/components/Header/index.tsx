import React from 'react'
import { BlockToggle, HeaderBody, HeaderTitle, NumberBlock, NumberToggle, TextToggle, ThemeToggle, ToggleBall, ToggleStyle } from './style';

const Header = () => {
  return (
    <HeaderBody>
        <HeaderTitle>calc</HeaderTitle>
        <ThemeToggle>
            <TextToggle>Theme</TextToggle>
            <BlockToggle>
                <NumberBlock>
                    <NumberToggle>1</NumberToggle>
                    <NumberToggle>2</NumberToggle>
                    <NumberToggle>3</NumberToggle>
                </NumberBlock>
                <ToggleStyle>
                  <ToggleBall />
                </ToggleStyle>
            </BlockToggle>
        </ThemeToggle>
    </HeaderBody>
  )
}

export default Header;