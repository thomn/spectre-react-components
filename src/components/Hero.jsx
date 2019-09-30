import factory from 'factory';

const Hero = factory({
    type: 'div',
    className: 'hero',
});

export const Body = factory({
    type: 'div',
    className: 'hero-body',
});

Hero.Body = Body;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.09.2019
 * Time: 22:52
 */
export default Hero;