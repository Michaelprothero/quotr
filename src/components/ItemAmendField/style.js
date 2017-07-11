import styled from 'styled-components'
import { COLORS } from '../../constants/theme'
export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    input {
        width: 100%;
    }
    padding: 5px 0 5px 0;

     h1 {
        margin-right: 5px;
    }
    
    ::-webkit-input-placeholder {
        color: ${COLORS.BLUE}
    }
`;



export const InputWrapper = styled.div`
    display: flex;
    flex: 0.5;
    background-color: blue;
    align-self: center;

`;

export const CurrencyBox = styled.div`
    display: flex;
    flex: 0.5;
    text-align: center;
    align-items: center;
    flex-direction: row;
   
`;