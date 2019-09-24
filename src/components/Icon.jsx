import React from 'react';
import useClassName from '../hooks/useClassName';
import {oneOf} from '../utils';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Icon = (props) => {
    let {
        className,
        size,
        type,
        ..._
    } = props;

    className = useClassName(className, 'icon', {
        ['icon-' + size]: (size),
        ['icon-' + type]: (type),
    });

    return (
        <i
            className={className}
            {..._}
        />
    );
};

Icon.Size = {
    BIG: '2x',
    BIGGER: '3x',
    BIGGEST: '4x',
};

Icon.Type = {
    ARROW_UP: 'arrow-up',
    ARROW_RIGHT: 'arrow-right',
    ARROW_DOWN: 'arrow-down',
    ARROW_LEFT: 'arrow-left',
    UPWARD: 'upward',
    FORWARD: 'forward',
    DOWNWARD: 'downward',
    BACK: 'back',
    CARET: 'caret',
    MENU: 'menu',
    APPS: 'apps',
    MORE_HORIZ: 'more-horiz',
    MORE_VERT: 'more-vert',
    RESIZE_HORIZ: 'resize-horiz',
    RESIZE_VERT: 'resize-vert',
    PLUS: 'plus',
    MINUS: 'minus',
    CROSS: 'cross',
    CHECK: 'check',
    STOP: 'stop',
    SHUTDOWN: 'shutdown',
    REFRESH: 'refresh',
    SEARCH: 'search',
    FLAG: 'flag',
    BOOKMARK: 'bookmark',
    EDIT: 'edit',
    DELETE: 'delete',
    SHARE: 'share',
    DOWNLOAD: 'download',
    UPLOAD: 'upload',
    MAIL: 'mail',
    PEOPLE: 'people',
    MESSAGE: 'message',
    PHOTO: 'photo',
    TIME: 'time',
    LOCATION: 'location',
    LINK: 'link',
    EMOJI: 'emoji',
};

Icon.propTypes = {
    size: oneOf(Icon.Size),
    type: oneOf(Icon.Type).isRequired,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 01:07
 */
export default Icon;