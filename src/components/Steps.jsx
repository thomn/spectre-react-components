import React from 'react';
import {factory, useClassName} from 'nean';
import Link from './Link';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const Steps = factory({
    type: 'ul',
    className: 'step',
});

/**
 *
 * @type {*}
 */
export const Item = factory({
    render: ({className, active, ..._rest}) => {
        className = useClassName('step-item', className, {
            active,
        });

        return (
            <li className={className}>
                <Link {..._rest}/>
            </li>
        );
    },
});

Item.propTypes = {
    active: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 06.11.2019
 * Time: 22:13
 */
export default Steps;