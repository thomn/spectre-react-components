import {factory} from 'nean';
import {oneOfOption, bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Chip = factory({
    type: 'div',
    className: 'chip',
    style: ({size, active}) => ({
        active,
        [`chip-${size}`]: (size),
    }),
});

Chip.Size = {
    SMALL: 'sm',
};

Chip.propTypes = {
    active: bool,
    size: oneOfOption(Chip.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:12
 */
export default Chip;