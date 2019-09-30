import factory from 'factory';
import {oneOfOption, bool} from 'propTypes';
import React from 'react';

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
        [`btn-${size}`]: (size),
        'btn-primary': (primary),
        'btn-success': (success),
        'btn-error': (error),
    }),
});

Button.Size = {
    LARGE: 'lg',
    MEDIUM: null,
    SMALL: 'sm',
};

Button.propTypes = {
    active: bool,
    disabled: bool,
    primary: bool,
    success: bool,
    error: bool,
    size: oneOfOption(Button.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:15
 */
export default Button;
