import {factory} from 'nean';
import {bool, func} from 'propTypes';
import React, {Fragment} from 'react';
import Button from './Button';

/**
 *
 * @type {*}
 */
const Tabs = factory({
    type: 'ul',
    className: 'tab',
    style: ({block}) => ({
        'tab-block': (block),
    }),
});

Tabs.propTypes = {
    block: bool,
};

export const Tab = factory({
    type: 'li',
    className: 'tab-item',
    style: ({active}) => ({
        active,
    }),
    render: ({children, onClose}) => {
        if (!onClose) {
            return children;
        }

        return (
            <Fragment>
                {children}
                <Button
                    clear
                    onClick={onClose}
                />
            </Fragment>
        );
    },
});

Tab.propTypes = {
    active: bool,
    onClose: func,
};

Tabs.Tab = Tab;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 06.11.2019
 * Time: 16:26
 */
export default Tabs;