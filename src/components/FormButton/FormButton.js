import React from 'react'
import { Container } from './style'

const FormButton = (props) => {
    const { text, action, primary } = props;
    return (
        <Container primary={primary}>
            <button onClick={action}>
                {text}
            </button>
        </Container>
    )
};

export default FormButton