import styled from 'styled-components'
import { COLORS } from '../../constants/theme'

export const Input = styled.input`
    color: ${COLORS.BLUE};
    height: 30px;
    -webkit-appearance:none 
    outline:none 
    border-bottom: 2px solid blue;
    ::-webkit-input-placeholder {
        color: ${COLORS.BLUE}
    }
`;