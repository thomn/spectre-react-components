import React from 'react';
import PropTypes from 'prop-types';
import useClassName from '../hooks/useClassName';
import {oneOf} from '../utils';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Button = (props) => {
    let {
        className,
        children,
        active,
        disabled,
        primary,
        success,
        error,
        size,
        ..._
    } = props;

    className = useClassName(className, 'btn', {
        active,
        disabled,
        ['btn-' + size]: (size),
        ['btn-primary']: (primary),
        ['btn-success']: (success),
        ['btn-error']: (error),
    });

    return (
        <button
            className={className}
            {..._}
        >
            {children}
        </button>
    );
};

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