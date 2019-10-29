import React from 'react';
import {factory, useClassName, useType} from 'nean';
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
    render: ({src, ..._rest}) => {

        if (src) {
            return (
                <Element
                    {..._rest}
                    src={src}
                />
            );
        }

        return (
            <Element
                use={[
                    useType('b'),
                ]}
            />
        );
    },
});

Video.propTypes = {
    responsive: bool,
    fourByThree: bool,
    oneByOne: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.10.2019
 * Time: 15:04
 */
export default Video;