import hook from 'nean/hook'
import {useClassName} from 'nean/hooks';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.09.2019
 * Time: 02:39
 */
export default hook((badge) => ({className}) => ({
    className: useClassName(className, 'badge'),
    'data-badge': badge,
}));