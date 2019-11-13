import proxyquire from 'proxyquire';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 15.10.2019
 * Time: 20:22
 */
export default () => {
    const stub = {
        forwardRef: (cb) => (props) => cb(props),
        createElement: (type, props) => ({type, props}),
    };

    const {factory} = proxyquire('nean', {
        'react': stub,
        '@noCallThru': true,
    });

    return factory;
}