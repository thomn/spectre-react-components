import {hook, useClassName} from 'nean';

export const Size = {
    LARGE: 'lg',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.10.2019
 * Time: 14:33
 */
export default (loading, size) => hook('loading', ({className}) => ({
    className: useClassName(className, {
        loading,
        [`loading-${size}`]: (size),
    }),
}));