import React from 'react';
import {factory} from 'nean';
import Group from './Group';

/**
 *
 * @type {*}
 */
const Switch = factory({
    render: ({children, ..._rest}) => (
        <Group>
            <label className="form-switch">
                <input
                    {..._rest}
                    type="checkbox"
                />
                <i className="form-icon"/> {children}
            </label>
        </Group>
    ),
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:30
 */
export default Switch;