import React from 'react';
import {factory} from 'nean';
import Link from './Link';

/**
 *
 * @type {*}
 */
const Timeline = factory({
    className: 'timeline',
});

/**
 *
 * @type {any}
 */
export const Item = factory({
    className: 'timeline-item',
});

/**
 *
 * @type {any}
 */
export const Left = factory({
    className: 'timeline-left',
});

/**
 *
 * @type {any}
 */
export const Content = factory({
    className: 'timeline-content',
});

/**
 *
 * @type {any}
 */
export const Icon = factory({
    render: ({children, ..._rest}) => (
        <Link
            className="timeline-icon"
            {..._rest}
        >
            {children}
        </Link>
    ),
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Timeline: 19:23
 */
export default Timeline;