import factory from 'nean/factory';
import {oneOfOption,  string} from 'propTypes';

/**
 *
 * @type {*}
 */
const Avatar = factory({
    type: 'figure',
    className: 'avatar',
    style: ({size}) => ({
        [`avatar-${size}`]: (size),
    }),
    extend: ({initials}) => ({
        'data-initial': initials,
    }),
});

Avatar.Size = {
    EXTRA_LARGE: 'xl',
    LARGE: 'lg',
    SMALL: 'sm',
    EXTRA_SMALL: 'xs',
};

Avatar.propTypes = {
    size: oneOfOption(Avatar.Size),
    initials: string,
};

/**
 *
 * @type {*}
 */
export const Presence = factory({
    type: 'i',
    className: 'avatar-presence',
    style: ({presence}) => (presence),
});

Presence.Presence = {
    ONLINE: 'online',
    BUSY: 'busy',
    AWAY: 'away',
    OFFLINE: 'offline',
};

Presence.propTypes = {
    presence: oneOfOption(Presence.Presence),
};

Avatar.Presence = Presence;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 17.06.2019
 * Time: 17:32
 */
export default Avatar;
