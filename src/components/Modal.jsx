import React from 'react';
import {factory} from 'nean';
import Button from './Button';
import Link from './Link';
import {oneOfOption} from '../propTypes';
import useUtility from '../hooks/useUtility';

const {Position} = useUtility;

/**
 *
 * @type {*}
 */
const Modal = ({children, ..._rest}) => (
    <Element {..._rest}>
        <Overlay/>
        <Container>
            {children}
        </Container>
    </Element>
);

Modal.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Modal.propTypes = {
    size: oneOfOption(Modal.Size),
};

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

/**
 *
 * @type {*}
 */
export const Overlay = factory({
    render: ({children, href}) => (
        <Link
            className="modal-overlay"
            href={href}
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
    type: 'div',
    className: 'modal-header',
    render: ({children, title, onClose}) => (
        <>
            <Button
                clear
                onClick={() => onClose && onClose()}
                use={[
                    useUtility(Position.FLOAT_RIGHT),
                ]}
            />
            {children}

            <div className="modal-title h5">{title}</div>
        </>
    ),
});

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'modal-body',
    render: ({children}) => (
        <div className="content">
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