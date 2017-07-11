import React from 'react';
import { IoCheckmarkRound, IoCloseRound, IoIosTrash } from 'react-icons/lib/io'

const Icon = (props) => {
    return React.createElement(iconMap(props.name), { ...props })
};

const iconMap = (iconName) => {
    switch (iconName) {
        case 'check':
            return IoCheckmarkRound;
        case 'cross':
            return IoCloseRound;
        case 'trash':
            return IoIosTrash;
        default:
            return null;
            break;
    }
};

export default Icon