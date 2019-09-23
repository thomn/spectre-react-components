/**
 *
 * @param entries
 * @returns {string}
 */
const composer = (...entries) => (
    entries
        .filter(Boolean)
        .map((value) => ({
            [String.toString()]: () => value,
            [Number.toString()]: () => value,
            [Array.toString()]: () => composer(...value),
            [Object.toString()]: () => composer(Object.keys(value)
                .filter(key => value[key]),
            ),
        })[value.constructor.toString()])
        .map(fn => fn())
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