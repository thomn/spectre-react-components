import {createElement, forwardRef} from 'react';
import {useClassName} from 'hooks';

/**
 *
 * @param fn
 * @param props
 * @param keys
 * @returns {any}
 */
const proxy = (fn, props, keys) => fn(
    new Proxy(props, {
        get(target, key, receiver) {
            keys.push(key);

            return Reflect.get(target, key, receiver);
        },
    }),
);

/**
 *
 * @param type
 * @param baseClass
 * @param style
 * @param exclude
 * @param rewire
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, rewire = (props) => (props || {}) , wrap = (children) => (children)}) => {
    return forwardRef((props, ref) => {
        const keys = [];

        let {className, children} = props;
        const classes = style && proxy(style, props, keys);
        const rewired = rewire && proxy(rewire, props, keys);

        className = useClassName(
            baseClass,
            classes,
            className,
        );

        children = wrap(children, props);

        const nullify = keys.reduce((acc, key) => (
            (acc[key] = undefined) || acc
        ), {});

        props = {
            ...rewired,
            children,
            ...nullify,
            ref,
            className,
        };

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
