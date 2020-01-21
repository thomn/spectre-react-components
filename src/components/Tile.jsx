import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Tile = factory({
    type: 'div',
    className: 'tile',
    style: ({centered}) => ({
        'tile-centered': centered,
    }),
});

/**
 *
 * @type {*}
 */
export const Icon = factory({
    type: 'div',
    className: 'tile-icon',
});

/**
 *
 * @type {*}
 */
export const Title = factory({
    type: 'div',
    className: 'tile-title',
});

/**
 *
 * @type {*}
 */
export const SubTitle = factory({
    type: 'small',
    className: 'tile-subtitle',
});

/**
 *
 * @type {*}
 */
export const Content = factory({
    type: 'div',
    className: 'tile-content',
});

/**
 *
 * @type {*}
 */
export const Action = factory({
    type: 'div',
    className: 'tile-action',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.06.2019
 * Time: 14:59
 */
export default Tile;
