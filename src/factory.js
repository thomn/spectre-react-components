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
 * @param exclude
 * @returns {any}
 */
const proxy = (fn, props, keys, exclude) => {
    const handler = {
        get(target, key, receiver) {
            if (!exclude.includes(key)) {
                keys.push(key);
            }

            return Reflect.get(target, key, receiver);
        },
    };
    return fn(
        new Proxy(props, handler),
    );
};

/**
 *
 * @param type
 * @param baseClass
 * @param style
 * @param exclude
 * @param modifier
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, exclude = ['children'], modifier = through}) => {
    const keys = [];

    return (props) => {
        let {className} = props;

        className = useClassName(
            className,
            baseClass,
            style && proxy(style, props, keys, exclude),
        );

        const nullify = keys.reduce((acc, key) => (
            (acc[key] = undefined) || acc
        ), {});

        // styleProps are nullified
        props = {
            ...props,
            ...nullify,
        };

        return createElement(
            type,
            {
                ...props,
                ...modifier(props),
                className,
            },
        );
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 16:53
 */
export default factory;
