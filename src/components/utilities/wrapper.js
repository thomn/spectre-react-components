import {createElement} from 'react';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 00:10
 */
export default ({condition, component, children, props}) => (
    condition
        ? createElement(component, {children, ...props})
        : children
);