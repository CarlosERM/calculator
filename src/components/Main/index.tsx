import React from "react";
import Header from "../Header";
import Input from "../Input";
import Output from "../Output";
import CalculatorBody from "./style";

const Calculator = () => {
  return (
    <CalculatorBody role="calculator_body">
      <Header />
      <Output />
      <Input />
    </CalculatorBody>
  );
};

export default Calculator;
