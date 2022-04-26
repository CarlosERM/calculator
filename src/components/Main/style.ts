import styled from "styled-components";

const CalculatorBody = styled.div`
  padding: 2.125rem 1.5rem;
  max-width: 33.75rem;
  margin: 0rem auto;

  @media (min-width: 50rem) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding:0;
  }
  @media (max-height: 720px) {
    margin-top:8rem;
    padding-bottom:4rem;

  }
`;
export default CalculatorBody;
