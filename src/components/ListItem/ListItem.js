import React from 'react'
import { Container, LeftText, RightText}  from './style'

const ListItem = (props) => {
    const { leftComponent, rightComponent } = props;
    return (
        <Container>
            <LeftText>
                {leftComponent}
            </LeftText>
            <RightText>
                {rightComponent}
            </RightText>
        </Container>
    )
};

export default ListItem