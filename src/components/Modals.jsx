import React, {createContext, useState} from 'react';
import {factory} from 'nean';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @type {any}
 */
const Modals = factory({
    render: ({className, children, ..._rest}) => {
        const [modals, setModals] = useState([]);

        /**
         *
         * @param key
         * @param modal
         * @param props
         */
        const show = (key, modal, props) => {
            setModals((modals) => {
                if (modals.find(modal => modal.key === key)) {
                    return modals;
                }

                return [...modals, {key, modal, props}];
            });
        };

        /**
         *
         * @param key
         */
        const hide = (key) => {
            setModals((modals) => {
                return modals.filter(modal => modal.key !== key);
            });
        };

        const value = {
            show,
            hide
        };

        const render = () => {
            return modals.map(({key, modal: Modal, props}) => (
                <Modal
                    key={key}
                    {...props}
                />
            ));
        };

        return (
            <Provider
                value={value}
                {..._rest}
            >
                {children}
                {render()}
            </Provider>
        );
    },
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 19:12
 */
export default Modals;