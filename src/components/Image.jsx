import {factory} from 'nean';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Image = factory({
    type: 'img',
    style: ({responsive, fit, contain}) => ({
        'img-responsive': (responsive),
        'img-fit': (fit),
        'img-contain': (contain),
    }),
});

Image.propTypes = {
    responsive: bool,
    fit: bool,
    contain: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 26.09.2019
 * Time: 19:24
 */
export default Image;