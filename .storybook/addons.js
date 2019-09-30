import '@storybook/addon-knobs/register';
import {text, boolean, number, select as _select} from '@storybook/addon-knobs';

/**
 *
 * @param name
 * @param options
 * @param def
 * @returns {*}
 */
const select = (name, options, def = null) => (
    _select(
        name,
        Object.keys(options).map(key => options[key]),
        def,
    )
);

export {
    select, boolean, text, number,
};
