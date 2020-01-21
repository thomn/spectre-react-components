import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Empty = factory({
    type: 'div',
    className: 'empty'
});

/**
 *
 * @type {*}
 */
export const Icon = factory({
    type: 'div',
    className: 'empty-icon'
});

/**
 *
 * @type {*}
 */
export const Title = factory({
    type: 'p',
    className: 'empty-title'
});

/**
 *
 * @type {*}
 */
export const SubTitle = factory({
    type: 'p',
    className: 'empty-subtitle'
});

/**
 *
 * @type {*}
 */
export const Action = factory({
    type: 'div',
    className: 'empty-action'
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 21:58
 */
export default Empty;