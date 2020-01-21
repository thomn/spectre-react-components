import React, {createContext, useContext} from 'react';
import {factory, useType} from 'nean';
import {bool} from 'propTypes';

const Context = createContext(false);
const {Provider} = Context;

/**
 *
 * @type {*}
 */
const Table = factory({
    type: 'table',
    className: 'table',
    style: ({striped, hover, scroll}) => ({
        'table-striped': (striped),
        'table-hover': (hover),
        'table-scroll': (scroll),
    }),
});

Table.propTypes = {
    striped: bool,
    hover: bool,
    scroll: bool,
};

/**
 *
 * @type {*}
 */
export const Head = factory({
    type: 'thead',
    render: ({children}) => (
        <Provider value='head'>
            {children}
        </Provider>
    ),
});

/**
 *
 * @type {*}
 */
export const Body = factory({
    type: 'tbody',
    render: ({children}) => (
        <Provider value='body'>
            {children}
        </Provider>
    ),
});

/**
 *
 * @type {*}
 */
export const Row = factory({
    type: 'tr',
    style: ({active}) => ({
        active,
    }),
});

Row.propTypes = {
    active: bool,
};

/**
 *
 * @type {*}
 */
export const Column = factory({
    type: 'td',
    extend: () => {
        const parent = useContext(Context);
        const type = {
            'head': 'th',
            'body': 'td',
        }[parent];

        return {
            use: [
                useType(type),
            ],
        };
    },
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 20:24
 */
export default Table;