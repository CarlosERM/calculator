import React from "react";
import styled from "styled-components";

const OutputBody = styled.h1`
  background-color: ${({ theme }) => theme.color.backgrounds.screen};
  border-radius: 0.625rem;
  padding: 1.5938rem 1.5rem;
  font-family: "Spartan", sans-serif !important;
  font-size: 1.9375rem;
  transition: background-color 0.5s linear;

  font-weight: 700;
  color: ${({ theme }) => theme.color.text.headerColor};
  text-align: right;
  margin-bottom: 1.5rem;
  border: none;
  width: 100%;
  overflow-x:hidden;

  @media (min-width:50rem) {
    padding: 2.5rem 2.25rem;
    font-size: 2.8125rem;
  }
`;

export default OutputBody;
