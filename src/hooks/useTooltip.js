import {hook, useClassName} from 'nean';

export const Side = {
    LEFT: 'left',
    BOTTOM: 'bottom',
    RIGHT: 'right',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 11:18
 */
export default (tooltip, side = null) => hook('tooltip', ({className} = {}) => ({
    className: useClassName(className, 'tooltip', {
        ['tooltip-' + side]: (side),
    }),
    'data-tooltip': tooltip,
}));