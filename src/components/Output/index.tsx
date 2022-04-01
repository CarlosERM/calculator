import React from "react";
import { useMyContext } from "../../context";
import OutputBody from "./styles";

const Output = () => {
  const { calc } = useMyContext();

  return <OutputBody type="text" value={calc || "0"} readOnly />;
};

export default Output;
