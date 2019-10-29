import React, {Fragment} from 'react';
import {factory} from 'nean';
import Button from './Button';
import {useUtility} from '../hooks';

const {Position} = useUtility;

/**
 *
 * @type {*}
 */
const Toast = factory({
    type: 'div',
    className: 'toast',
    style: ({primary, success, warning, error}) => ({
        'toast-primary': (primary),
        'toast-success': (success),
        'toast-warning': (warning),
        'toast-error': (error),
    }),
    render: ({children}) => (
        <Fragment>
            {children}
            <Button
                clear
                className={Position.FLOAT_RIGHT}
            />
        </Fragment>
    ),
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 15:38
 */
export default Toast;