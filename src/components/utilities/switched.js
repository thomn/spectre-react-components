import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

/**
 */
const switched = () => {
    const Context = createContext(false);
    const {Provider} = Context;

    /**
     *
     * @param conditions
     * @param children
     * @returns {*}
     * @constructor
     */
    const Switch = ({conditions, children}) => {
        Switch.propTypes = {
            conditions: PropTypes.object.isRequired,
        };

        return (
            <Provider value={conditions}>
                {children}
            </Provider>
        );
    };

    /**
     *
     * @param children
     * @param test
     * @param id
     * @returns {null|*}
     * @constructor
     */
    const Case = ({children, test}) => {
        Case.propTypes = {
            test: PropTypes.func.isRequired,
        };

        const conditions = useContext(Context);

        if (test(conditions)) {
            children = (typeof children === 'function')
                ? children(conditions)
                : children
            ;

            return children || null;
        }

        return null;
    };

    return {
        Switch,
        Case,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.08.2019
 * Time: 15:12
 */
export default switched;