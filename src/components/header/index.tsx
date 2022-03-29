import React from 'react'
import { BlockToggle, HeaderBody, HeaderTitle, NumberBlock, NumberToggle, TextToggle, ThemeToggle, ToggleStyle } from './style';

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
                <ToggleStyle/>
            </BlockToggle>
        </ThemeToggle>
    </HeaderBody>
  )
}

export default Header;