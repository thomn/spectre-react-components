import React from 'react';
import {factory, useType} from 'nean';
import {bool} from 'propTypes';

/**
 *
 * @type {any}
 */
const Element = factory({
    type: 'video',
    style: ({responsive, fourByThree, oneByOne}) => ({
        'video-responsive': (responsive),
        'video-responsive-4-3': (fourByThree),
        'video-responsive-1-1': (oneByOne),
    }),
});

/**
 *
 * @type {*}
 */
const Video = factory({
    render: ({iframe, ..._rest}) => {
        if (!iframe) {
            return (
                <Element {..._rest}/>
            );
        }

        return (
            <Element
                use={[
                    useType('div'),
                ]}
            >
                <iframe {..._rest}/>
            </Element>
        );
    },
});

Video.propTypes = {
    responsive: bool,
    fourByThree: bool,
    oneByOne: bool,
    iframe: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 15:04
 */
export default Video;