import React from 'react';
import {factory, useClassName} from 'nean';
import {number} from '../propTypes'

/**
 *
 * @type {*}
 */
const Bar = factory({
    type: 'div',
    className: 'bar',
    style: ({slider, size}) => ({
        'bar-slider': (slider),
        ['bar-' + size]: (size),
    }),
});

Bar.Size = {
    SMALL: 'sm',
};

/**
 *
 * @type {*}
 */
export const Item = factory({
    type: 'div',
    className: 'bar-item',
    extend: ({width, style}) => ({
        style: {
            ...style,
            width: width + '%',
        },
    }),
});

Item.propTypes = {
    width: number.isRequired,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 18:24
 */
export default Bar;