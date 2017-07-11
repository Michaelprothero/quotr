import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10px;
`;

export const LeftComponent = styled.div`
    align-self: flex-start;
    font-size: 1.3em;
    font-weight: bold;
`;

export const RightComponent = styled.div`
    align-self: flex-end;
    justify-content: flex-end;    
    color: #238df8;
    font-size: 0.9em;
`;