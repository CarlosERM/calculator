import React from "react";
import styled from "styled-components";

const InputBody = styled.div`
  background-color: ${({ theme }) => theme.color.backgrounds.toggle};
  border-radius: 0.625rem;
  padding: 1.5rem;
  display: grid;
  
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 0.8125rem;
  grid-row-gap: 1.0625rem;

  transition: background-color 0.5s linear;
  @media (min-width: 50rem) {
    gap: 1.5625rem;
  }
`;

export default InputBody;
