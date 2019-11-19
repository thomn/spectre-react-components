import {factory} from 'nean';

/**
 *
 * @type {*}
 */
const Navbar = factory({
    type: 'header',
    className: 'navbar',
});

/**
 *
 * @type {*}
 */
export const Section = factory({
    type: 'section',
    className: 'navbar-section',
});

/**
 *
 * @type {*}
 */
export const Center = factory({
    type: 'section',
    className: 'navbar-center',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 19.11.2019
 * Time: 16:37
 */
export default Navbar;