import {useContext, useMemo} from 'react';
import {Context} from '../components/Modals';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.11.2019
 * Time: 19:30
 */
export default (modal, props) => {
    const key = useMemo(() => Date.now(), []);
    const {show, hide} = useContext(Context);

    const showModal = () => {
        show(key, modal, props);
    };

    const hideModal = () => {
        hide(key);
    };

    return [
        showModal,
        hideModal,
    ];
}