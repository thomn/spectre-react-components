import React from 'react';
import {hook} from 'nean';
import Addon from '../components/Addon';

export const Side = {
    RIGHT: 'right',
    LEFT: 'left',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 20:43
 */
export default (element, side = Side.RIGHT) => hook('addon', (current) => {
    if (current === 'display') {
        return true;
    }

    if (current !== side) {
        return null;
    }

    return (
        <Addon>
            {element}
        </Addon>
    );
});