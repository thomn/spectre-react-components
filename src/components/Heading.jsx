import {factory, useType} from 'nean';
import {oneOfOption} from '../propTypes';

/**
 *
 * @type {*}
 */
const Heading = factory({
    type: 'h1',
    extend: ({type}) => {
        if (!type) {
            return null;
        }

        const fn = useType({
            '1': 'h1',
            '2': 'h2',
            '3': 'h3',
            '4': 'h4',
            '5': 'h5',
            '6': 'h6',
        }[type]);

        return {
            use: [
                fn
            ],
        };
    },
});

Heading.Type = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
};

Heading.propTypes = {
    type: oneOfOption(Heading.Type),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 19:33
 */
export default Heading;