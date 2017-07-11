import React from 'react'
import { Input } from './style'

const InputField = (props) => {
    const { text } = props;
    return <Input value={text} {...props} />
};

export default InputField