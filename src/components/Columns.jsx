import factory from 'nean/factory';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Columns = factory({
    type: 'div',
    className: 'columns',
    style: ({gapless, oneline}) => ({
        'col-gapless': gapless,
        'col-oneline': oneline,
    }),
});

Columns.propTypes = {
    gapless: bool,
    oneline: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 29.09.2019
 * Time: 23:14
 */
export default Columns;