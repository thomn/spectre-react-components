import React from 'react';
import {factory, useClassName} from 'nean';
import {string} from '../propTypes';

/**
 *
 * @type {*}
 */
const Figure = factory({
    type: 'figure',
    render: ({children, className, caption, ..._rest}) => {
        className = useClassName('figure-caption', className);

        return (
            <figure className="figure">
                {children}
                <figcaption
                    {..._rest}
                    className={className}
                >
                    {caption}
                </figcaption>
            </figure>
        );
    },
});

Figure.propTypes = {
    caption: string,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 15:04
 */
export default Figure;