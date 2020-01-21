import React from 'react';
import {factory, useClassName} from 'nean';
import Group from './Group';
import {bool, string, arrayOf, oneOfOption} from 'propTypes';

/**
 *
 * @type {*}
 */
const Select = factory({
    render: ({children, selected, size, multiple, success, error, ..._rest}) => {
        const className = useClassName('form-select', {
            [`select-${size}`]: (size),
            'is-success': (success),
            'is-error': (error),
        });

        return (
            <Group>
                <select
                    {..._rest}
                    className={className}
                    multiple={multiple === true}
                >
                    {children}
                </select>
            </Group>
        );
    },
});

Select.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Select.propTypes = {
    selected: string,
    multiple: bool,
    success: bool,
    error: bool,
    options: arrayOf(string),
    size: oneOfOption(Select.Size),
};

/**
 *
 * @type {*}
 */
export const Option = factory({
    render: ({children, ..._rest}) => (
        <option {..._rest}>
            {children}
        </option>
    ),
});

Option.propTypes = {
    selected: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:07
 */
export default Select;