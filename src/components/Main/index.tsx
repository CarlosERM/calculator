import React from 'react'
import Header from '../Header'
import Input from '../Input'
import Output from '../Output'
import CalculatorBody from './style'

const Calculator = () => {

  return (
    // <Header />
    <CalculatorBody>
      <Header />
      <Output/>
      <Input />
      
    </CalculatorBody>
  )
}

export default Calculator