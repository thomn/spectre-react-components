import React from 'react';
import {factory, useClassName} from 'nean';
import Group from './Group';
import {oneOfOption} from '../propTypes';

/**
 *
 * @type {*}
 */
const Textarea = factory({
    render: ({children, ..._rest}) => {
        const className = useClassName('form-input', {
            [`input-${size}`]: (size),
        });

        return (
            <Group>
                <label className="form-label">
                    {children}
                </label>
                <textarea
                    {..._rest}
                    className={className}
                />
            </Group>
        );
    },
});

Textarea.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Textarea.propTypes = {
    size: oneOfOption(Textarea.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:05
 */
export default Textarea;