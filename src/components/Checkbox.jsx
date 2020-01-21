import React, {createRef, useEffect} from 'react';
import {factory, useClassName} from 'nean';
import {bool, string} from 'propTypes';
import Group from './Group';

/**
 *
 * @type {*}
 */
const Checkbox = factory({
    render: ({label, indeterminate, inline, success, error, disabled, ..._rest}) => {
        const ref = createRef();
        const className = useClassName('form-checkbox', {
            disabled,
            'form-inline': (inline),
            'is-success': (success),
            'is-error': (error),
        });

        useEffect(() => {
            ref.current.indeterminate = (indeterminate === true);
        }, [indeterminate]);

        return (
            <Group>
                <label className={className}>
                    <input
                        {..._rest}
                        type="checkbox"
                        ref={ref}
                    />
                    <i className="form-icon"/> {label}
                </label>
            </Group>
        );
    },
});

Checkbox.propTypes = {
    label: string,
    indeterminate: bool,
    inline: bool,
    success: bool,
    error: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:31
 */
export default Checkbox;