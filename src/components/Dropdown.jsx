import React, {Children, cloneElement} from 'react';
import {factory, intercept} from 'nean';
import {bool, string} from '../propTypes';
import Button from './Button';
import Menu, {Item} from './Menu';
import {Side} from '../hooks/useIcon';

/**
 *
 * @type {*}
 */
const Element = factory({
    type: 'div',
    className: 'dropdown',
    style: ({right}) => ({
        'dropdown-right': (right),
    }),
});

/**
 *
 * @type {*}
 */
export const Option = Item;

/**
 *
 * @type {*}
 */
const Dropdown = ({children, label, primary, use, onSelect, ..._rest}) => {
    const icon = intercept(use)('icon');

    /**
     *
     * @param e
     * @param value
     */
    const onClick = (e, value) => {
        e.target.value = value;

        onSelect && onSelect(e);
    };

    if (onSelect) {
        children = Children.map(children, (child) => {
            return cloneElement(child, {
                onClick,
            });
        });
    }

    return (
        <Element
            {..._rest}
        >
            <Button
                className="dropdown-toggle"
                primary={primary}
            >
                {icon(Side.LEFT)} {label} {icon(Side.RIGHT)}
            </Button>

            <Menu>
                {children}
            </Menu>
        </Element>
    );
};

Dropdown.propTypes = {
    right: bool,
    button: bool,
    primary: bool,
    label: string,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.01.2020
 * Time: 22:12
 */
export default Element;