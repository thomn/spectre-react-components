import React from 'react';
import {hook} from 'nean';
import Icon from '../components/Icon';

export const Side = {
    RIGHT: 'right',
    LEFT: 'left',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 12.10.2019
 * Time: 00:36
 */
export default (type, side = Side.RIGHT) => hook('icon', (current, props) => {
    if (current === 'display') {
        return true;
    }

    if (current !== side) {
        return null;
    }

    return (
        <Icon
            {...props}
            type={type}
        />
    );
})