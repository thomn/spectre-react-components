/**
 *
 * @param children
 * @param Component
 * @returns {*|boolean}
 */
export const every = (children, Component) => (
    children.every(({type}) => Component === type)
);