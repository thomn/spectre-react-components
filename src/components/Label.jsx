import {factory} from 'nean';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Label = factory({
    type: 'span',
    className: 'label',
    style: ({primary, secondary, success, warning, error, rounded}) => ({
        'label-primary': (primary),
        'label-secondary': (secondary),
        'label-success': (success),
        'label-warning': (warning),
        'label-error': (error),
        'label-rounded': (rounded),
    }),
});

Label.propTypes = {
    primary: bool,
    secondary: bool,
    success: bool,
    warning: bool,
    error: bool,
    rounded: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.09.2019
 * Time: 22:10
 */
export default Label;