import {createElement, forwardRef} from 'react';
import {useClassName} from 'hooks';

/**
 *
 * @param value
 * @param rest
 * @param key
 * @returns {*}
 */
const remove = ({[key]: value, ...rest}, key) => rest;

/**
 *
 * @param target
 * @param prop
 * @param attributes
 * @returns {any}
 */
const define = (target, prop, attributes) => (
    Object.defineProperty(target, prop, attributes)
);

/**
 *
 * @param target
 * @param pool
 */
const trap = (target, pool) => {
    const trapped = {};

    /**
     *
     * @param prop
     * @returns {*}
     */
    const spy = (prop) => () => {
        pool.add(prop);

        return target[prop];
    };

    for (const prop in target) {
        if (!target.hasOwnProperty(prop)) {
            continue;
        }

        define(trapped, prop, {
            enumerable: true,
            get: spy(prop),
        });
    }

    return trapped;
};

/**
 *
 * @param type
 * @param baseClass
 * @param style
 * @param exclude
 * @param extend
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, extend = (props) => (props), render = ({children}) => (children)}) => {
    return forwardRef((props, ref) => {
        let {className, use = []} = props;

        const pool = new Set(['use']);
        const trapped = trap(props, pool);

        const classes = (style && style(trapped)) || null;
        const extended = (extend && extend(trapped)) || null;
        const children = (render && render(trapped)) || null;

        if (!type) {
            return children;
        }

        className = useClassName(
            baseClass,
            classes,
            className,
        );

        const extract = [...pool].reduce(remove, {
            ...props,
            ...extended,
        });

        props = {
            ...extract,
            children,
            className,
            ref,
        };

        if (use) {
            if (use instanceof Function) {
                use = [use];
            }

            for (const fn of use) {
                if (fn.type) {
                    type = fn.type;

                    continue;
                } else if (typeof fn !== 'function') {
                    continue;
                }

                const result = fn(props);

                for (const prop in result) {
                    if (!result.hasOwnProperty(prop)) {
                        continue;
                    }

                    define(props, prop, {
                        value: result[prop],
                        enumerable: true,
                        writeable: false,
                    });
                }
            }
        }

        return createElement(
            type,
            props,
        );
    });
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 16:53
 */
export default factory;
