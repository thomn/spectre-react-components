import {factory} from 'nean';
import {oneOfOption} from 'propTypes';

/**
 *
 * @type {*}
 */
const Hero = factory({
    type: 'div',
    className: 'hero',
    style: ({size}) => ({
        [`hero-${size}`]: (size),
    }),
});

Hero.Size = {
    LARGE: 'lg',
    MEDIUM: null,
    SMALL: 'sm',
};

Hero.propTypes = {
    size: oneOfOption(Hero.Size),
};

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'hero-body',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.09.2019
 * Time: 22:52
 */
export default Hero;