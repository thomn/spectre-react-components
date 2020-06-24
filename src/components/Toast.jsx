import React from 'react';
import {factory, useClassName} from 'nean';
import {bool, func} from '../propTypes';
import Button from './Button';
import useUtility from '../hooks/useUtility';

const {Position} = useUtility;

/**
 *
 * @type {*}
 */
const Toast = factory({
    render: ({children, className, onClose, primary, success, warning, error, ..._rest}) => {
        className = useClassName('toast', {
            'toast-primary': (primary),
            'toast-success': (success),
            'toast-warning': (warning),
            'toast-error': (error),
        });

        return (
            <div
                className={className}
                {..._rest}
            >
                {children}
                {onClose && (<Button
                    clear
                    className={Position.FLOAT_RIGHT}
                    onClick={onClose}
                />)}
            </div>
        );
    },
});

Toast.propTypes = {
    primary: bool,
    success: bool,
    warning: bool,
    error: bool,
    onClose: func,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 15:38
 */
export default Toast;