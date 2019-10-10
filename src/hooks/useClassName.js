const table = (bool, number, string, array, object) => ({
    [Boolean]: bool,
    [Number]: number,
    [String]: string,
    [Array]: array,
    [Object]: object,
});

const operations = table(
    (value) => value,
    (value) => value,
    (value) => value,
    (value) => useClassName(...value),
    (value) => Object.keys(value).filter(key => useClassName(value[key])),
);

const execute = (value) => (
    (operations[value.constructor] || (() => value))(value)
);

/**
 *
 * @param entries
 * @returns {string}
 */
const useClassName = (...entries) => (entries
    .filter(Boolean)
    .map(execute)
    .flat()
    .join(' ')
    .trim()
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 07.09.2019
 * Time: 21:59
 */
export default useClassName;
