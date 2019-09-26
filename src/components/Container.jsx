import factory from 'factory';
import {oneOf} from 'utils';

/**
 *
 * @type {*}
 */
const Container = factory({
    type: 'div',
    className: 'container',
    style: ({size}) => ({
        ['grid-' + size]: (size),
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
    size: oneOf(Container.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.09.2019
 * Time: 22:36
 */
export default Container;
