import useClassName from './useClassName';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.09.2019
 * Time: 02:39
 */
export default (badge, className = '') => ({
    className: useClassName(className, 'badge'),
    'data-badge': badge,
});