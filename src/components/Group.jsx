import PropTypes from 'prop-types';
import factory from 'factory';
import {every} from 'utils';
import Button from './Button';

/**
 *
 * @type {*}
 */
const Group = factory({
    type: 'div',
    style: ({children, block}) => ({
        block,
        'btn-group': every(children, Button),
    }),
});

Group.propTypes = {
    block: PropTypes.bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:25
 */
export default Group;