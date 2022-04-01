import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { callbackify } from "util";
import { useMyContext } from "../../../context";
import {
  KeyNumBody,
  KeyDelResetBody,
  KeyResetBody,
  KeyEqualBody,
} from "./styles";

const Key = () => {
  const { calc, setCalc } = useMyContext();
  const operators = ["/", "x", "+", "-", "."];

  const updateHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value: string = e.currentTarget.dataset.key || "0";

    if (
      (operators.includes(value.trim()) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const deleteHandler = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };

  const resetHandler = () => {
    if (calc === "") {
      return;
    }

    setCalc("");
  };

  const calculate = () => {
    if (calc === "") {
      return;
    }

    setCalc(eval(calc));
  };

  return (
    <>
      <KeyNumBody onClick={updateHandler} data-key={7}>
        7
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={8}>
        8
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={9}>
        9
      </KeyNumBody>

      <KeyDelResetBody onClick={deleteHandler} data-key={"DEL"}>
        DEL
      </KeyDelResetBody>

      <KeyNumBody onClick={updateHandler} data-key={4}>
        4
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={5}>
        5
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={6}>
        6
      </KeyNumBody>

      <KeyNumBody onClick={updateHandler} data-key={" + "}>
        +
      </KeyNumBody>

      <KeyNumBody onClick={updateHandler} data-key={1}>
        1
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={2}>
        2
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={3}>
        3
      </KeyNumBody>

      <KeyNumBody onClick={updateHandler} data-key={" - "}>
        -
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={"."}>
        .
      </KeyNumBody>

      <KeyNumBody onClick={updateHandler} data-key={0}>
        0
      </KeyNumBody>

      <KeyNumBody onClick={updateHandler} data-key={" / "}>
        /
      </KeyNumBody>
      <KeyNumBody onClick={updateHandler} data-key={" x "}>
        x
      </KeyNumBody>
      <KeyResetBody onClick={resetHandler} data-key={"reset"}>
        reset
      </KeyResetBody>
      <KeyEqualBody onClick={calculate} data-key={"="}>
        =
      </KeyEqualBody>
    </>
  );
};

export default Key;
