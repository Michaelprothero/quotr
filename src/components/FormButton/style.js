import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 0.3;
    justify-content: center;
    background-color: ${props => props.primary ? '#238df8' : 'white'}; 
    height: 45px;
    border-radius: 2px;
    button {
         color: ${props => props.primary ? 'white' : 'grey'};
         background-color: ${props => props.primary ? '#238df8' : 'white'}; 
    }
`;