import {factory} from 'nean';
import {bool} from 'propTypes';
import Button from './Button';
import {Addon} from './Input';

import {every, some} from 'utils';

/**
 *
 * @type {*}
 */
const Group = factory({
    type: 'div',
    style: ({children, block}) => ({
        block,
        'input-group': some(children, [Addon]),
        'btn-group': every(children, Button),
        'form-group': some(children, ['label', 'input', 'select', 'textarea']),
    }),
});

Group.propTypes = {
    block: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:25
 */
export default Group;