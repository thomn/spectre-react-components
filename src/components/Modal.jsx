import React, {Fragment} from 'react';
import {factory, useClassName} from 'nean';
import Button from './Button';
import Link from './Link';
import {oneOfOption} from '../propTypes';
import useUtility from '../hooks/useUtility';

const {Position} = useUtility;

/**
 *
 * @type {*}
 */
const Element = factory({
    type: 'div',
    className: 'modal active',
    style: ({size, active}) => ({
        [`modal-${size}`]: (size),
        active,
    }),
});

Element.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Element.propTypes = {
    size: oneOfOption(Element.Size),
};

/**
 *
 * @type {*}
 */
export const Overlay = factory({
    render: ({children, ..._rest}) => (
        <Link
            className="modal-overlay"
            {..._rest}
        >
            {children}
        </Link>
    ),
});

/**
 *
 * @type {any}
 */
export const Container = factory({
    type: 'div',
    className: 'modal-container',
});

/**
 *
 * @type {*}
 */
export const Header = factory({
    render: ({children, className, title, onClose, ..._rest}) => {
        className = useClassName('modal-header', className);

        return (
            <div
                className={className}
                {..._rest}
            >
                <Button
                    clear
                    onClick={() => onClose && onClose()}
                    use={[
                        useUtility(Position.FLOAT_RIGHT),
                    ]}
                />
                {children}

                <div className="modal-title h5">{title}</div>
            </div>
        );
    },
});

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'modal-body',
    render: ({children, ..._rest}) => (
        <div
            className="content"
            {..._rest}
        >
            {children}
        </div>
    ),
});

/**
 *
 * @type {*}
 */
export const Footer = factory({
    type: 'div',
    className: 'modal-footer',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 22:29
 */
export default Element;