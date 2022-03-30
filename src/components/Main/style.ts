import styled from 'styled-components'

const CalculatorBody = styled.div`
    padding: 2.125rem 1.5rem;
    max-width: 30.625rem;
    margin: 0px auto;
    
    @media(min-width:50rem) {
        margin: none;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    }
  
`
export default CalculatorBody