import React from "react";
import { useMyContext } from "../../context";
import OutputBody from "./styles";

const Output = () => {
  const { calc, setCalc } = useMyContext();

  return <OutputBody value={calc.num} />;
};

export default Output;
