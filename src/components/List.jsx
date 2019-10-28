import {factory, useType} from 'nean';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const List = factory({
    type: 'ul',
    extend: ({ordered}) => {
        if (!ordered) {
            return;
        }

        return {
            use: [
                useType('ol'),
            ],
        };
    },
});

/**
 *
 * @type {any}
 */
export const Item = factory({
    type: 'li',
});

List.propTypes = {
    ordered: bool,
};

List.Item = Item;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 20:20
 */
export default List;