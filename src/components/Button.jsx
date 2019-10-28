import React from 'react';
import {factory} from 'nean';
import {oneOfOption, bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Button = factory({
    type: 'button',
    className: 'btn',
    style: ({active, disabled, size, primary, success, error, action, link}) => ({
        active,
        disabled,
        [`btn-${size}`]: (size),
        'btn-primary': (primary),
        'btn-success': (success),
        'btn-error': (error),
        'btn-action': (action),
        'btn-link': (link),
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
    action: bool,
    link: bool,
    size: oneOfOption(Button.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:15
 */
export default Button;
