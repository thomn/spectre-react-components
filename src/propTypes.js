import {bool, oneOf, string, func, object, shape, oneOfType, arrayOf, any, number} from 'prop-types';

/**
 *
 * @param props
 * @returns {emptyFunctionThatReturnsNull}
 */
const oneOfOption = (props) => (
    oneOf(
        Object.keys(props).map(key => props[key]),
    )
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.09.2019
 * Time: 22:18
 */
export {
    oneOfOption,
    oneOf,
    bool,
    string,
    func,
    object,
    shape,
    oneOfType,
    arrayOf,
    any,
    number,
};