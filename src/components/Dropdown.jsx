import React from 'react';
import {oneOfType, string, shape, arrayOf, number, any} from 'propTypes';
import {factory} from 'nean';
import Menu, {Item} from './Menu';
import Button from './Button';
// import {useUtility} from '../hooks';
// import {Text} from '../hooks/useUtility';

/**
 *
 * @type {any}
 */
const Dropdown = factory({
    type: 'div',
    className: 'dropdown',
    render: ({children, options, selected, onSelect, primary}) => {
        const entries = [];

        /**
         *
         * @param e
         * @param value
         */
        const onClick = (e, value) => {
            e.target.value = value;

            onSelect && onSelect(e);
        };

        for (const option of options) {
            const {label = option, value = option} = option;

            const entry = (
                <Option
                    key={label}
                    value={value}
                    onClick={(e) => onClick(e, value)}
                >
                    {label}
                </Option>
            );
            entries.push(entry);
        }

        return (
            <>
                <Button
                    className="dropdown-toggle"
                    primary={primary}
                >
                    {children}
                </Button>
                <Menu>
                    {entries}
                </Menu>
            </>
        );
    },
});

Dropdown.propTypes = {
    options: oneOfType([
        arrayOf(string),
        arrayOf(shape({
            label: oneOfType([string, number]),
            value: any,
        })),
    ]),
};

/**
 *
 * @type {any}
 */
const Option = factory({
    render: ({children, onClick}) => (
        <Item onClick={onClick}>
            <a>{children}</a>
        </Item>
    ),
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.10.2019
 * Time: 22:28
 */
export default Dropdown;