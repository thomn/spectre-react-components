import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {emptyFunctionThatReturnsNull}
 */
export const oneOf = (props) => (
    PropTypes.oneOf(
        Object.keys(props).map(key => props[key]),
    )
);