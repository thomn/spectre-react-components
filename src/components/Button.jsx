import PropTypes from 'prop-types';
import {oneOf} from 'utils';
import factory from 'factory';

/**
 *
 * @type {*}
 */
const Button = factory({
    type: 'button',
    className: 'btn',
    style: ({active, disabled, size, primary, success, error}) => ({
        active,
        disabled,
        ['btn-' + size]: (size),
        ['btn-primary']: (primary),
        ['btn-success']: (success),
        ['btn-error']: (error),
    }),
});

Button.Size = {
    LARGE: 'lg',
    SMALL: 'sm',
};

Button.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    size: oneOf(Button.Size)
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:15
 */
export default Button;
