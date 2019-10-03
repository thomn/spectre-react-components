/**
 *
 * @param entries
 * @returns {string}
 */
const composer = (...entries) => (
    entries
        .filter(Boolean)
        .map((value) => ({
            [Boolean]: () => value,
            [Number]: () => value,
            [String]: () => value,
            [Array]: () => composer(...value),
            [Object]: () => Object.keys(value).filter(key => composer(value[key])),
        })[value.constructor](value))
        .flat()
        .join(' ')
        .trim()
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 07.09.2019
 * Time: 21:59
 */
export default composer;