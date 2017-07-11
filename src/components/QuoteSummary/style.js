import styled from 'styled-components'

export const Container = styled.div`
    h2 {
        color: black;
    }
    div:nth-of-type(2){
        margin-left: 5px;
    }
    
    span {
        font-size: .8em;
        letter-spacing: -1px;
    }
`;

export const BoldLabel = styled.div`
    font-weight: bold;
    
`;

export const LargeAmountText = styled.div `
    font-size: 2em;
    color: #238df8;
    font-weight: bold;
    letter-spacing: -3px;
    span {
        font-size: .5em;
        letter-spacing: -1px;
    }
`;