import factory from 'nean/factory';
import {bool, oneOfOption, oneOf} from 'propTypes';

/**
 *
 * @type {*}
 */
const Column = factory({
    type: 'div',
    className: 'column',
    style: ({width, auto, breakpoint}) => ({
        [`col-${width}`]: (width && !breakpoint),
        [`col-${breakpoint}-${width}`]: (width && breakpoint),
        [`col-${auto}-auto`]: (typeof auto === 'string'),
        'col-auto': (auto === true),
    }),
});

Column.Width = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: '10',
    ELEVEN: '11',
    TWELVE: '12',
};

Column.Breakpoint = {
    EXTRA_LARGE: 'xl',
    LARGE: 'lg',
    MEDIUM: 'md',
    SMALL: 'sm',
    EXTRA_SMALL: 'xs',
};

Column.Auto = {
    EXTRA_LARGE: 'xl',
    LARGE: 'lg',
    MEDIUM: 'md',
    SMALL: 'sm',
    EXTRA_SMALL: 'xs',
};

Column.propTypes = {
    breakpoint: oneOfOption(Column.Breakpoint),
    width: oneOfOption(Column.Width),
    auto: oneOf([
        oneOfOption(Column.Auto),
        bool,
    ]),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.09.2019
 * Time: 22:33
 */
export default Column;