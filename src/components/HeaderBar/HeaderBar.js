import React from 'react'
import { Container, LeftComponent, RightComponent } from './style'

const HeaderBar = (props) => {
    const { leftComponent, rightComponent } = props;
    return (
        <Container>
            <LeftComponent>{leftComponent.text}</LeftComponent>
                <RightComponent onClick={() => rightComponent.action()}>
                    {rightComponent.text}
                </RightComponent>
        </Container>
    )
};

export default HeaderBar