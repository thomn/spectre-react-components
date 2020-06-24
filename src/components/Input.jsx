import React from 'react';
import {factory, intercept, useClassName} from 'nean';
import {oneOfOption, bool} from '../propTypes';
import Group from './Group';
import {Side} from '../hooks/useIcon';

import Wrapper from './utilities/wrapper';

/**
 *
 * @type {any}
 */
const WithIcon = factory({
    render: ({children, icon}) => {
        const left = icon(Side.LEFT, {
            className: 'form-icon',
        });

        const right = icon(Side.RIGHT, {
            className: 'form-icon',
        });

        const className = useClassName('', {
            'has-icon-left': (!!left),
            'has-icon-right': (!!right),
        });

        return (
            <div className={className}>
                {left}
                {children}
                {right}
            </div>
        );
    },
});

/**
 *
 * @type {*}
 */
const Input = factory({
    render: ({children, className, use, size, success, error, disabled, ..._rest}) => {
        const icon = intercept(use)('icon');
        const addon = intercept(use)('addon');

        className = useClassName('form-input', {
            disabled,
            [`input-${size}`]: (size),
            'is-success': (success),
            'is-error': (error),
        });

        return (
            <Group>
                {(children) && (
                    <label className="form-label">
                        {children}
                    </label>
                )}

                {addon(Side.LEFT)}

                <Wrapper
                    condition={icon('display')}
                    component={WithIcon}
                    props={{icon, use}}
                >
                    <input
                        {..._rest}
                        className={className}
                    />
                </Wrapper>

                {addon(Side.RIGHT)}
            </Group>
        );
    },
});

Input.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Input.propTypes = {
    size: oneOfOption(Input.Size),
    error: bool,
    success: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 20:52
 */
export default Input;