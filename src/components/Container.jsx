import {factory} from 'nean';
import {oneOfOption} from '../propTypes';

/**
 *
 * @type {*}
 */
const Container = factory({
    type: 'div',
    className: 'container',
    style: ({size, hide, show}) => ({
        [`grid-${size}`]: (size),
        [`hide-${hide}`]: (hide),
        [`show-${show}`]: (show),
    }),
});

Container.Size = {
    EXTRA_LARGE: 'xl',
    LARGE: 'lg',
    MEDIUM: 'md',
    SMALL: 'sm',
    EXTRA_SMALL: 'xs',
};

Container.propTypes = {
    size: oneOfOption(Container.Size),
    hide: oneOfOption(Container.Size),
    show: oneOfOption(Container.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.09.2019
 * Time: 22:36
 */
export default Container;
