import {factory} from 'nean';
import {bool} from 'propTypes';
import Button from './Button';
import Addon from './Addon';

import {every, some} from 'utils';

/**
 *
 * @type {*}
 */
const Group = factory({
    type: 'div',
    style: ({children, block, success, error}) => ({
        block,
        'has-success': (success),
        'has-error': (error),
        'input-group': some(children, [Addon]),
        'btn-group': every(children, Button),
        'form-group': some(children, ['label', 'input', 'select', 'textarea', 'div']),
    }),
});

Group.propTypes = {
    block: bool,
    success: bool,
    error : bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:25
 */
export default Group;