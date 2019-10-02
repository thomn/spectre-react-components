import React from 'react';
import factory from 'factory';
import {string} from 'propTypes';
import Menu, {Item} from './Menu';
import Button from './Button';
import {useUtility} from '../hooks';
import {Text} from '../hooks/useUtility';
import Icon from './Icon';

const Dropdown = factory({
    type: 'div',
    className: 'dropdown',
    wrap: (children, {label, onClick}) => {

        return (
            <>
                <Button
                    className="dropdown-toggle"
                >
                    {label}
                    <Icon type={Icon.Type.CARET}/>
                </Button>

                <Menu
                    use={useUtility(Text.LEFT)}
                    onClick={onClick}
                >
                    {children}
                </Menu>
            </>
        );
    },
});

Dropdown.propTypes = {
    label: string,
};

export const Option = Item;


Dropdown.Option = Option;


export default Dropdown;