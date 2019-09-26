import PropTypes from 'prop-types'
import factory from 'factory';
import {oneOf} from 'utils';

/**
 *
 * @type {*}
 */
const Chip = factory({
    type: 'div',
    className: 'chip',
    style: ({size, active}) => ({
        ['chip-' + size]: (size),
        active,
    }),
});

Chip.Size = {
    SMALL: 'sm',
};

Chip.propTypes = {
    active: PropTypes.bool,
    size: oneOf(Chip.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:12
 */
export default Chip;