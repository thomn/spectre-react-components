import {hook, useClassName} from 'nean';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 11:18
 */
export default (tooltip) => hook('tooltip', ({className}) => ({
    className: useClassName(className, 'tooltip'),
    'data-tooltip': tooltip,
}));