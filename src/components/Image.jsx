import factory from 'factory';

/**
 *
 * @type {*}
 */
const Image = factory({
    type: 'img',
    className: 'img-responsive',
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:24
 */
export default Image;