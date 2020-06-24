import React from 'react';
import {factory, useClassName, useType} from 'nean';
import Link from './Link';
import Button from './Button';
import {bool} from '../propTypes';

/**
 *
 * @type {*}
 */
const OffCanvas = factory({
    type: 'div',
    className: 'off-canvas',
    style: ({sidebar}) => ({
        'off-canvas-sidebar-show': (sidebar),
    }),
});

OffCanvas.propTypes = {
    sidebar: bool,
};

/**
 *
 * @type {*}
 */
export const Sidebar = factory({
    type: 'div',
    className: 'off-canvas-sidebar',
});

/**
 *
 * @type {*}
 */
export const Overlay = factory({
    render: ({className, ..._rest}) => {
        className = useClassName('off-canvas-overlay', className);

        return (
            <Link
                className={className}
                {..._rest}
            />
        );
    },
});

/**
 *
 * @type {*}
 */
export const Toggle = factory({
    render: ({className, ..._rest}) => {
        className = useClassName('off-canvas-toggle', className);

        return (
            <Button
                className={className}
                use={[
                    useType('a'),
                ]}
                {..._rest}
            />
        );
    },
});

/**
 *
 * @type {*}
 */
export const Content = factory({
    type: 'div',
    className: 'off-canvas-content',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 22:15
 */
export default OffCanvas;