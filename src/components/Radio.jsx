import React from 'react';
import {factory, useClassName} from 'nean';
import {bool} from 'propTypes';
import Group from './Group';

/**
 *
 * @type {*}
 */
const Radio = factory({
    render: ({children, options, inline, ..._rest}) => {
        const className = useClassName('form-radio', {
            'form-inline': (inline),
        });
        const wrapped = options.map(option => (
            <label
                key={option}
                className={className}
            >
                <input
                    {..._rest}
                    type="radio"
                />
                <i className="form-icon"/> {option}
            </label>
        ));

        return (
            <Group>
                <label className="form-label">
                    {children}
                </label>
                {wrapped}
            </Group>
        );
    },
});

Radio.propTypes = {
    inline: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:20
 */
export default Radio;