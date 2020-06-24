import React, {Fragment} from 'react';
import {factory} from 'nean';
import {bool} from '../propTypes';
import Icon from './Icon';

/**
 *
 * @type {*}
 */
const Accordion = factory({
    type: 'div',
    className: 'accordion',
    render: ({children, exclusive}) => {
        const type = {
            [exclusive]: 'checkbox',
            [!exclusive]: 'radio',
        }[exclusive];

        return (
            <Fragment>
                <input
                    type={type}
                    hidden
                />
                {children}
            </Fragment>
        );
    },
});

Accordion.propTypes = {
    exclusive: bool,
};

/**
 *
 * @type {*}
 */
export const Header = factory({
    type: 'label',
    className: 'accordion-header',
    render: ({children, caret}) => (
        <Fragment>
            {(caret) && (
                <Icon type={Icon.Type.ARROW_RIGHT}/>
            )}
            {children}
        </Fragment>
    ),
});

Header.propTypes = {
    caret: bool,
};

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'div',
    className: 'accordion-body',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.09.2019
 * Time: 21:53
 */
export default Accordion;

