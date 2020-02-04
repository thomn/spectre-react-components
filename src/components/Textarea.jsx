import React from 'react';
import {factory, useClassName} from 'nean';
import Group from './Group';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const Textarea = factory({
    render: ({children, success, error, disabled, ..._rest}) => {
        const className = useClassName('form-input', {
            disabled,
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
                <textarea
                    {..._rest}
                    className={className}
                />
            </Group>
        );
    },
});

Textarea.propTypes = {
    success: bool,
    error: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:05
 */
export default Textarea;