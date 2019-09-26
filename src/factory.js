import {createElement} from 'react';
import {useClassName} from 'hooks';

/**
 *
 * @param props
 * @returns {*|{}}
 */
const through = (props) => (props || {});

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
 * @param modifier
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, modifier = through}) => {
    const keys = [];

    return (props) => {
        let {className, children, ...rest} = props;

        className = useClassName(
            className,
            baseClass,
            style && proxy(style, props, keys),
        );

        const nullify = keys.reduce((acc, key) => (
            (acc[key] = undefined) || acc
        ), {});

        props = {
            ...rest,
            ...modifier(rest),
            ...nullify,
            className
        };

        return createElement(
            type,
            props,
            children
        );
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 16:53
 */
export default factory;
