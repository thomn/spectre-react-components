import {createElement, forwardRef} from 'react';
import {useClassName} from 'hooks';

const define = (target, prop, attributes) => (
    Object.defineProperty(target, prop, attributes)
);

/**
 *
 * @param target
 * @param nullify
 */
const trap = (target, nullify) => {
    const trapped = {};

    /**
     *
     * @param key
     */
    const insert = (key) => {
        define(nullify, key, {
            enumerable: true,
            value: undefined,
        });
    };

    /**
     *
     * @param prop
     * @returns {*}
     */
    const spy = (prop) => () => {
        insert(prop);

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
 * @param rewire
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, rewire = (props) => (props), render = ({children}) => (children)}) => {
    return forwardRef((props, ref) => {
        let {className, use = []} = props;

        const nullify = {
            use: undefined,
        };

        const trapped = trap(props, nullify);

        const classes = (style && style(trapped)) || null;
        const rewired = (rewire && rewire(trapped)) || null;
        const children = (render && render(trapped)) || null;

        if (!type) {
            return children;
        }

        className = useClassName(
            baseClass,
            classes,
            className,
        );

        props = {
            ...props,
            ...rewired,
            ...nullify,
            children,
            className,
            ref,
        };

        if (use) {
            if (use instanceof Function) {
                use = [use];
            }

            for (const fn of use) {
                if (typeof fn !== 'function') {
                    continue;
                }

                const result = fn(props);

                for (const prop in result) {
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
