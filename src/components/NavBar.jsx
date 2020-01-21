import {factory} from 'nean';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const NavBar = factory({
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
 * Date: 21.01.2020
 * Time: 21:46
 */
export default NavBar;