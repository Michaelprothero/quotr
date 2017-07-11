import styled from 'styled-components'
import { COLORS } from '../../constants/theme'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid whitesmoke;
    padding: 10px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const ValueContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: space-between; 
    span {
        font-size: .8em;
    }
    
    h2 {
        font-size: 1em;
        color: black;
    }
    h4 {
        color: ${COLORS.BLUE}; 
        font-size: 1em;
        margin-left: 10px;  
    }
`;

export const AddItemButton = styled.div`
    padding: 5px;
    color: ${COLORS.BLUE};
`;
export const ButtonContainer = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
`;

export const ModeButton = styled.div`
    color: ${props => props.cancelStyle ? COLORS.ORANGE : COLORS.BLUE};
    font-weight: bold;
`;

export const AddQuoteItem = styled.div`
    display: flex;
    
    h2 {
        color: ${COLORS.BLUE};
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DisclaimerText = styled.div`
    padding: 15px;
    p {
        color: black;
        font-size: 0.9em;
        text-align: center;
    }
`;

export const QuoteItemList = styled.div`
`;