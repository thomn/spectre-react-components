import React from 'react';
import {factory, useClassName} from 'nean';
import Group from './Group';
import {bool, string} from '../propTypes';

/**
 *
 * @type {*}
 */
const Switch = factory({
    render: ({label, success, error, disabled, ..._rest}) => {
        const className = useClassName('form-switch', {
            disabled,
            'is-success': (success),
            'is-error': (error),
        });

        return (
            <Group>
                <label className={className}>
                    <input
                        {..._rest}
                        type="checkbox"
                    />
                    <i className="form-icon"/> {label}
                </label>
            </Group>
        );
    },
});

Switch.propTypes = {
    label: string,
    success: bool,
    error: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:30
 */
export default Switch;