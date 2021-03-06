import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Card = factory({
    type: 'div',
    className: 'card',
});

/**
 *
 * @type {*}
 */
export const Image = factory({
    type: 'div',
    className: 'card-image',
});

/**
 *
 * @type {*}
 */
export const Header = factory({
    type: 'div',
    className: 'card-header',
});

/**
 *
 * @type {*}
 */
export const Title = factory({
    type: 'div',
    className: 'card-title',
});

/**
 *
 * @type {*}
 */
export const SubTitle = factory({
    type: 'div',
    className: 'card-subtitle',
});

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'card-body',
});

/**
 *
 * @type {*}
 */
export const Footer = factory({
    type: 'div',
    className: 'card-footer',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:22
 */
export default Card;