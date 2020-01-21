import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Panel = factory({
    type: 'div',
    className: 'panel',
});

/**
 *
 * @type {*}
 */
export const Header = factory({
    type: 'div',
    className: 'panel-header',
});

/**
 *
 * @type {*}
 */
export const Title = factory({
    type: 'div',
    className: 'panel-title',
});

/**
 *
 * @type {*}
 */
export const Nav = factory({
    type: 'div',
    className: 'panel-nav',
});

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'panel-body',
});

/**
 *
 * @type {*}
 */
export const Footer = factory({
    type: 'div',
    className: 'panel-footer',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 22:35
 */
export default Panel;