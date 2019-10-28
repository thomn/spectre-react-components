import {factory} from 'nean';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Form = factory({
    type: 'form',
    style: ({horizontal}) => ({
        'form-horizontal': (horizontal),
    }),
});

Form.propTypes = {
    horizontal: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:40
 */
export default Form;