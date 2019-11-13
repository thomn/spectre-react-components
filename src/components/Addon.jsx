import {factory} from 'nean';

/**
 *
 * @type {any}
 */
const Addon = factory({
    type: 'span',
    className: 'input-group-addon',
    style: ({size}) => ({
        ['input-' + size]: (size),
    }),
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.10.2019
 * Time: 00:25
 */
export default Addon;