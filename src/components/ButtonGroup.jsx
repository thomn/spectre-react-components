import factory from 'factory';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const ButtonGroup = factory({
    type: 'div',
    className: 'btn-group',
    style: ({block}) => ({
        'btn-group-block': (block),
    }),
});

ButtonGroup.propTypes = {
    block: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 06.06.2019
 * Time: 12:23
 */
export default ButtonGroup;
