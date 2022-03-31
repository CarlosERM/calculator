import React from "react";
import { useMyContext } from "../../context";
import OutputBody from "./styles";

const Output = () => {
  const { calc, setCalc } = useMyContext();

  return (
    <OutputBody
      value={
        calc.num1 != "0" && calc.num2 != "0"
          ? calc.num1 + calc.sign + calc.num2
          : calc.num1 + calc.sign
      }
    />
  );
};

export default Output;
