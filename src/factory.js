import {createElement} from 'react';
import {useClassName} from 'hooks';

const through = (props) => (props || {});

/**
 *
 * @param type
 * @param base
 * @param style
 * @param modifier
 * @returns {*}
 */
const factory = ({type, className: baseClass, style, modifier = through}) => (props) => {
    let {className} = props;

    className = useClassName(
        className,
        baseClass,
        style && style(props),
    );

    props = {
        ...props,
        className,
        ...modifier(props),
    };

    return createElement(
        type,
        props,
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 16:53
 */
export default factory;
