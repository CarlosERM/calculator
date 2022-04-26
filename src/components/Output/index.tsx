import React from "react";
import { useMyContext } from "../../context";
import OutputBody from "./styles";

const Output = () => {
  const { calc } = useMyContext();

  return <OutputBody role="output">
          {calc || "0"}
        </OutputBody>;
};

export default Output;
