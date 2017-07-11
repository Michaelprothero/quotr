import React from 'react'
import Icon from '../../components/Icon/Icon'

import { Container } from './style'
import { COLORS } from '../../constants/theme'

const ItemEditMenu = (props) => {
    const { editingItem, addItem, editItem, resetItem, deleteItem } = props;

    const buttonMap = [
        { name: 'check', action: () => editingItem ? editItem() : addItem() },
        { name: 'cross', action: () => resetItem() },
        { name: 'trash', action: () => deleteItem() },
    ];

    return (
        <Container>
            { buttonMap.map(button => <Icon key={button.name} color={COLORS.BLUE} name={button.name} onClick={() => button.action()}/>) }
        </Container>
    )
};

export default ItemEditMenu