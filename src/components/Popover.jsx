import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Popover = factory({
    type: 'div',
    className: 'popover',
    style: ({side}) => ({
        [`popover-${side}`]: (side),
    }),
});

Popover.Side = {
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left',
};

/**
 *
 * @type {*}
 */
export const Container = factory({
    type: 'div',
    className: 'popover-container',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 19.11.2019
 * Time: 16:40
 */
export default Popover;