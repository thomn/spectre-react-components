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
    style: ({active, disabled, clear, size, primary, success, error, action, link, circle}) => ({
        active,
        disabled,
        [`btn-${size}`]: (size),
        'btn-clear': (clear),
        'btn-primary': (primary),
        'btn-success': (success),
        'btn-error': (error),
        'btn-action': (action),
        'btn-link': (link),
        's-circle': (circle),
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
    clear: bool,
    primary: bool,
    success: bool,
    error: bool,
    action: bool,
    link: bool,
    circle: bool,
    size: oneOfOption(Button.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 21:15
 */
export default Button;
