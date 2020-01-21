import React from 'react';
import {factory, useClassName} from 'nean';
import Link from './Link';
import {func, bool} from '../propTypes';

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


/**
 *
 * @type {*}
 */
export const Item = factory({
    render: ({className, children, active, onClose, ..._rest}) => {
        className = useClassName('tab-item', className, {
            active,
        });

        return (
            <li className={className}>
                <Link {..._rest}>
                    {children}
                </Link>
            </li>
        );
    },
});

Item.propTypes = {
    active: bool,
    onClose: func,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 06.11.2019
 * Time: 16:26
 */
export default Tabs;