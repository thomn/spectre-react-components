import factory from 'nean/factory';
import {string} from 'propTypes';

/**
 *
 * @type {*}
 */
const Image = factory({
    type: 'img',
    className: 'img-responsive',
});

Image.propTypes = {
    src: string.isRequired,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:24
 */
export default Image;