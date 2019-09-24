import React from 'react';
import useClassName from '../hooks/useClassName';
import {oneOf} from '../utils';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Container = (props) => {
    let {
        className,
        children,
        size,
        ..._
    } = props;

    className = useClassName(className, 'container', {
        ['grid-' + size]: (size),
    });

    return (
        <div
            className={className}
            {..._}
        >
            {children}
        </div>
    );
};

Container.Size = {
    EXTRA_LARGE: 'xl',
    LARGE: 'lg',
    MEDIUM: 'md',
    SMALL: 'sm',
    EXTRA_SMALL: 'xs',
};

Container.propTypes = {
    size: oneOf(Container.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.09.2019
 * Time: 22:36
 */
export default Container;