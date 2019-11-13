import React from 'react';
import {factory, useClassName} from 'nean';
import Group from './Group';
import {bool, string, arrayOf, oneOfOption} from 'propTypes';

/**
 *
 * @type {*}
 */
const Select = factory({
    render: ({options, selected, size, multiple, ..._rest}) => {
        const className = useClassName('form-select', {
            [`select-${size}`]: (size),
        });

        const wrapped = options.map(option => (
            <option
                key={option}
                selected={option === selected}
            >
                {option}
            </option>
        ));

        return (
            <Group>
                <select
                    {..._rest}
                    className={className}
                    multiple={multiple === true}
                >
                    {wrapped}
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
    options: arrayOf(string),
    size: oneOfOption(Select.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:07
 */
export default Select;