import hook from 'nean/hook'
import {useClassName} from 'nean/hooks';

export const Size = {
    LARGE: 'lg',
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.10.2019
 * Time: 14:33
 */
export default hook((loading, size) => ({className}) => ({
    className: useClassName(className, {
        loading,
        [`loading-${size}`]: (size),
    }),
}));