import React from 'react';
import {factory} from 'nean';
import Wrapper from './utilities/wrapper';
import {bool, string} from '../propTypes';

/**
 *
 * @type {any}
 */
const Multiline = factory({
    render: ({children, lang, ..._rest}) => {
        const data = {'data-lang': lang};

        return (
            <pre
                className="code"
                {..._rest}
                {...data}
            >
                {children}
            </pre>
        );
    },
});

/**
 *
 * @type {*}
 */
const Code = factory({
    render: ({children, lang, multiline}) => (
        <Wrapper
            condition={multiline || lang}
            component={Multiline}
            props={{lang}}
        >
            <code>
                {children}
            </code>
        </Wrapper>
    ),
});

Code.propTypes = {
    multiline: bool,
    lang: string,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 20:14
 */
export default Code;