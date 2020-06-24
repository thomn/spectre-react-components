import React, {Fragment} from 'react';
import {factory} from 'nean';
import {bool, string} from '../propTypes';
import Group from './Group';

/**
 *
 * @type {*}
 */
const Radio = factory({
    render: ({children, label, ..._rest}) => (
        <Group>
            <label className="form-label">
                {label}
            </label>
            {children}
        </Group>
    ),
});

Radio.propTypes = {
    label: string,
};

/**
 *
 * @type {*}
 */
export const Option = factory({
    type: 'label',
    className: 'form-radio',
    style: ({inline, success, error, disabled}) => ({
        disabled,
        'form-inline': (inline),
        'is-success': (success),
        'is-error': (error),
    }),
    render: ({inline, children, ..._rest}) => {
        return (
            <Fragment>
                <input
                    {..._rest}
                    type="radio"
                />
                <i className="form-icon"/> {children}
            </Fragment>
        );
    },
});

Option.propTypes = {
    inline: bool,
    success: bool,
    error: bool,
    disabled: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 21:20
 */
export default Radio;