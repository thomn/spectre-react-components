import React, {createRef, useEffect} from 'react';
import {factory, useClassName} from 'nean';
import {bool} from 'propTypes';
import Group from './Group';

/**
 *
 * @type {*}
 */
const Checkbox = factory({
    render: ({children, indeterminate, inline, ..._rest}) => {
        const className = useClassName('form-checkbox', {
            'form-inline': (inline),
        });

        const ref = createRef();

        useEffect(() => {
            if (indeterminate) {
                ref.current.indeterminate = true;
            }
        }, []);

        return (
            <Group>
                <label className={className}>
                    <input
                        {..._rest}
                        type="checkbox"
                        ref={ref}
                    />
                    <i className="form-icon"/> {children}
                </label>
            </Group>
        );
    },
});

Checkbox.propTypes = {
    indeterminate: bool,
    inline: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:31
 */
export default Checkbox;