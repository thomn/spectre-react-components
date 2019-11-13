/**
 *
 * @param children
 * @param Component
 * @returns {*|boolean}
 */
export const every = (children, Component) => {
    if (!Array.isArray(children)) {
        children = [children];
    }

    return (
        children
        .filter(Boolean)
        .every(({type}) => Component === type)
    );
};

/**
 *
 * @param children
 * @param components
 * @returns {*|boolean}
 */
export const some = (children, components) => {
    if (!Array.isArray(children)) {
        children = [children];
    }

    return (
        children
        .filter(Boolean)
        .some(({type}) => components.includes(type))
    );
};