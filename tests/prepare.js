import proxyquire from 'proxyquire';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 10.10.2019
 * Time: 11:40
 */
export default () => {
    const stub = {
        forwardRef: (cb) => (props) => cb(props),
        createElement: (type, props) => ({type, props})
    };

    return proxyquire('../src/factory', {
        'react': stub,
        '@noCallThru': true,
    });
}