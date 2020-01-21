import {factory} from 'nean';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const Nav = factory({
    type: 'ul',
    className: 'nav',
});

/**
 *
 * @type {*}
 */
export const Item = factory({
    type: 'li',
    className: 'nav-item',
});

Item.propTypes = {
    active: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 22:24
 */
export default Nav;