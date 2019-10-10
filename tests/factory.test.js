import tape from 'tape';
import prepare from './prepare';

const {default: builder} = prepare();

const tester = ({equal, ok}) => ({type, props}) => ({
    classNameEquals: (value) => equal(value, props.className),
    typeEquals: (value) => equal(value, type),
    isNullified: (value) => ok(Object.keys(value).every(key => props[key] === undefined)),
});

tape('factory', ({plan, ...t}) => {
    const test = tester(t);

    const factory = builder({
        type: 'div',
        className: 'test',
        style: ({primary}) => ({
            primary,
        }),
    });

    const props = {
        primary: true,
    };

    const element = factory(props);

    const {classNameEquals, typeEquals, isNullified} = test(element);

    plan(3);
    classNameEquals('test primary');
    typeEquals('div');
    isNullified(props);
});