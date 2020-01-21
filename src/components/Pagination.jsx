import React from 'react';
import {factory} from 'nean';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const Pagination = factory({
    type: 'ul',
    className: 'pagination',
});

/**
 *
 * @type {*}
 */
export const Item = factory({
    type: 'li',
    className: 'page-item',
    style: ({active, disabled}) => ({
        active,
        disabled,
    }),
});

Item.propTypes = {
    active: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 22:32
 */
export default Pagination;