import React, {cloneElement, Children} from 'react';
import factory from 'factory';
import {string} from 'propTypes';
import Menu, {Item} from './Menu';
import Button from './Button';
import {useUtility} from '../hooks';
import {Text} from '../hooks/useUtility';
import Icon from './Icon';

/**
 *
 * @type {*}
 */
const Dropdown = factory({
    type: 'div',
    className: 'dropdown',
    render: ({children, label, onSelect}) => {
        let options = children;


        if (onSelect) {
            options = Children.map(children, (child) => (
                cloneElement(child, {
                    onClick: (event) => {
                        event.preventDefault();
                        onSelect(event);
                    },
                })
            ));
        }

        return (
            <>
                <Button
                    className="btn dropdown-toggle"
                >
                    {label}
                    <Icon type={Icon.Type.CARET}/>
                </Button>

                <Menu
                    // use={useUtility(Text.LEFT)}
                >
                    {options}
                </Menu>
            </>
        );
    },
});

Dropdown.propTypes = {
    label: string,
};

export const Option = factory({
    render: ({children, onClick, value}) => {
        /**
         *
         * @param e
         */
        const handleClick = (e) => {
            e.target.value = value;

            onClick && onClick(e);
        };

        return (
            <Item onClick={handleClick}>
                {children}
            </Item>
        );
    },
});

Option.propTypes = {
    value: string,
};

Dropdown.Option = Option;

export default Dropdown;