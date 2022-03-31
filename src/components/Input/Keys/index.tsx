import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useMyContext } from "../../../context";
import {
  KeyNumBody,
  KeyDelResetBody,
  KeyResetBody,
  KeyEqualBody,
} from "./styles";

const Key = () => {
  const { calc, setCalc } = useMyContext();
  const removeSpaces = (num: number) => num.toString().replace(/\s/g, "");

  function numClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const value = e.currentTarget.dataset.key;
    setCalc({
      ...calc,
      num: Number(value),
    });
  }

  function delClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.currentTarget.dataset.key);
  }

  function addClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.currentTarget.dataset.key);
  }
  function minusClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  function commaClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  function divisionClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  function multiplicationClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  function resetClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  function equalClickHandler(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    console.log(e.currentTarget.dataset.key);
  }
  return (
    <>
      <KeyNumBody onClick={numClickHandler} data-key={7}>
        7
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={8}>
        8
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={9}>
        9
      </KeyNumBody>

      <KeyDelResetBody onClick={delClickHandler} data-key={"DEL"}>
        DEL
      </KeyDelResetBody>

      <KeyNumBody onClick={numClickHandler} data-key={4}>
        4
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={5}>
        5
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={6}>
        6
      </KeyNumBody>

      <KeyNumBody onClick={addClickHandler} data-key={"+"}>
        +
      </KeyNumBody>

      <KeyNumBody onClick={numClickHandler} data-key={1}>
        1
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={2}>
        2
      </KeyNumBody>
      <KeyNumBody onClick={numClickHandler} data-key={3}>
        3
      </KeyNumBody>

      <KeyNumBody onClick={minusClickHandler} data-key={"-"}>
        -
      </KeyNumBody>
      <KeyNumBody onClick={commaClickHandler} data-key={"."}>
        .
      </KeyNumBody>

      <KeyNumBody onClick={numClickHandler} data-key={0}>
        0
      </KeyNumBody>

      <KeyNumBody onClick={divisionClickHandler} data-key={"/"}>
        /
      </KeyNumBody>
      <KeyNumBody onClick={multiplicationClickHandler} data-key={"x"}>
        x
      </KeyNumBody>
      <KeyResetBody onClick={resetClickHandler} data-key={"reset"}>
        reset
      </KeyResetBody>
      <KeyEqualBody onClick={equalClickHandler} data-key={"="}>
        =
      </KeyEqualBody>
    </>
  );
};

export default Key;
