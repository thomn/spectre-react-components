import {hook, useClassName} from 'nean';

/**
 *
 * @param props
 * @returns {*}
 */
const useUtility = (...props) => hook('utility', ({className} = {}) => ({
    className: useClassName(className, ...props),
}));

export const Text = {
    PRIMARY: 'text-primary',
    SECONDARY: 'text-secondary',
    DARK: 'text-dark',
    GRAY: 'text-gray',
    LIGHT: 'text-light',
    SUCCESS: 'text-success',
    WARNING: 'text-warning',
    ERROR: 'text-error',
    LEFT: 'text-left',
    CENTER: 'text-center',
    RIGHT: 'text-right',
    JUSTIFY: 'text-justify',
    LOWERCASE: 'text-lowercase',
    UPPERCASE: 'text-uppercase',
    CAPITALIZE: 'text-capitalize',
    NORMAL: 'text-normal',
    BOLD: 'text-bold',
    ITALIC: 'text-italic',
    LARGE: 'text-large',
    ELLIPSIS: 'text-ellipsis',
    CLIP: 'text-clip',
    BREAK: 'text-break',
    HIDE: 'text-hide',
    ASSISTIVE: 'text-assistive',
};

export const Cursor = {
    HAND: 'c-hand',
    MOVE: 'c-move',
    ZOOM_IN: 'c-zoom-in',
    ZOOM_OUT: 'c-zoom-out',
    NOT_ALLOWED: 'c-not-allowed',
    AUTO: 'c-auto',
};

export const Display = {
    BLOCK: 'd-block',
    INLINE: 'd-inline',
    INLINE_BLOCK: 'd-inline-block',
    FLEX: 'd-flex',
    INLINE_FLEX: 'd-inline-flex',
    NONE: 'd-none',
    HIDE: 'd-hide',
    VISIBLE: 'd-visible',
    INVISIBLE: 'd-invisible',
};

export const Position = {
    CLEARFIX: 'clearfix',
    FLOAT_LEFT: 'float-left',
    FLOAT_RIGHT: 'float-right',
    RELATIVE: 'p-relative',
    ABSOLUTE: 'p-absolute',
    FIXED: 'p-fixed',
    STICKY: 'p-sticky',
    CENTERED: 'p-centered',
    MARGIN_1: 'm-1',
    MARGIN_2: 'm-2',
    MARGIN_TOP_1: 'mt-1',
    MARGIN_TOP_2: 'mt-2',
    MARGIN_BOTTOM_1: 'mb-1',
    MARGIN_BOTTOM_2: 'mb-2',
    MARGIN_LEFT_1: 'ml-1',
    MARGIN_LEFT_2: 'ml-2',
    MARGIN_RIGHT_1: 'mr-1',
    MARGIN_RIGHT_2: 'mr-2',
    MARGIN_HORIZONTAL_1: 'mx-1',
    MARGIN_HORIZONTAL_2: 'mx-2',
    MARGIN_VERTICAL_1: 'my-1',
    MARGIN_VERTICAL_2: 'my-2',
    PADDING_1: 'p-1',
    PADDING_2: 'p-2',
    PADDING_TOP_1: 'pt-1',
    PADDING_TOP_2: 'pt-2',
    PADDING_BOTTOM_1: 'pb-1',
    PADDING_BOTTOM_2: 'pb-2',
    PADDING_LEFT_1: 'pl-1',
    PADDING_LEFT_2: 'pl-2',
    PADDING_RIGHT_1: 'pr-1',
    PADDING_RIGHT_2: 'pr-2',
    PADDING_HORIZONTAL_1: 'px-1',
    PADDING_HORIZONTAL_2: 'px-2',
    PADDING_VERTICAL_1: 'py-1',
};

export const Shape = {
    ROUNDED: 's-rounded',
    CIRCLE: 's-circle',
};

useUtility.Text = Text;
useUtility.Cursor = Cursor;
useUtility.Display = Display;
useUtility.Position = Position;
useUtility.Shape = Shape;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.10.2019
 * Time: 13:06
 */
export default useUtility;

