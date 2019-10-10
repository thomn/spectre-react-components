import tape from 'tape';
import {useBadge, useLoading, useTooltip, useUtility} from '../src/hooks';
import useType from '../src/hooks/useType';
import prepare from './prepare';

const {default: builder} = prepare();

const tester = ({equal, ok}) => ({type, props}) => ({
    classNameEquals: (value) => equal(value, props.className),
    typeEquals: (value) => equal(value, type),
    isNullified: (keys) => ok(keys.every(key => props[key] === undefined)),
    isNull: (key) => equal(props[key], null),
    isNotNull: (key) => ok(props[key]),
    is: (key, value) => equal(props[key], value),
});

tape('factory type', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
    });
    const element = factory({});
    const {typeEquals} = test(element);

    plan(1);
    typeEquals('div');
});

tape('factory className', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'test',
    });
    const element = factory({});
    const {classNameEquals} = test(element);

    plan(1);
    classNameEquals('test');
});

tape('factory style a', ({plan, ...t}) => {
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
    const {classNameEquals, isNullified} = test(element);

    plan(2);
    classNameEquals('test primary');
    isNullified(['primary']);
});

tape('factory style b', ({plan, ...t}) => {
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
        secondary: true,
    };
    const element = factory(props);
    const {classNameEquals, isNullified} = test(element);

    plan(2);
    classNameEquals('test primary');
    isNullified(['primary']);
});

tape('factory style c', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'test',
        style: ({primary, secondary}) => ({
            primary,
            secondary,
        }),
    });
    const props = {
        primary: true,
    };
    const element = factory(props);
    const {classNameEquals, isNullified} = test(element);

    plan(2);
    classNameEquals('test primary');
    isNullified(['primary', 'secondary']);
});

tape('factory style d', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'test',
        style: ({primary, secondary}) => ({
            foo: primary,
            bar: secondary,
        }),
    });
    const props = {
        primary: true,
        secondary: true,
    };
    const element = factory(props);
    const {classNameEquals, isNullified} = test(element);

    plan(2);
    classNameEquals('test foo bar');
    isNullified(['primary', 'secondary']);
});

tape('factory extend', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        extend: ({foo}) => ({
            'foobar': foo,
        }),
    });
    const props = {
        foo: 'bar',
    };
    const element = factory(props);
    const {isNullified, isNotNull} = test(element);

    plan(2);
    isNullified(['foo']);
    isNotNull('foobar');
});

tape('factory extend b', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        extend: ({foo, bar}) => ({
            'foobar': foo,
        }),
    });
    const props = {
        foo: 'bar',
        bar: 'foo',
    };
    const element = factory(props);
    const {isNullified, isNotNull} = test(element);

    plan(2);
    isNullified(['foo', 'bar']);
    isNotNull('foobar');
});

tape('factory extend c', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        extend: ({foo}) => ({
            'foobar': foo,
        }),
    });
    const props = {
        foo: 'bar',
        bar: 'foo',
    };
    const element = factory(props);
    const {isNullified, isNotNull} = test(element);

    plan(2);
    isNullified(['foo']);
    isNotNull('bar');
});

tape('factory render', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        render: ({children, foo}) => (foo),
    });
    const props = {
        foo: 'bar',
    };
    const element = factory(props);
    const {is, isNullified, isNotNull} = test(element);

    plan(3);
    isNullified(['foo']);
    isNotNull('children');
    is('children', 'bar');
});

tape('factory render b', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        render: ({foo}) => (foo),
    });
    const props = {
        foo: 'bar',
        children: 'children',
    };
    const element = factory(props);
    const {isNullified, is} = test(element);

    plan(2);
    isNullified(['foo']);
    is('children', 'bar');
});

tape('factory useType', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
    });
    const props = {
        use: [
            useType('ul'),
        ],
    };
    const element = factory(props);
    const {typeEquals, isNullified} = test(element);

    plan(2);
    typeEquals('ul');
    isNullified(['use']);
});

tape('factory useTooltip', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'menu',
    });
    const props = {
        use: useTooltip('foobar'),
    };
    const element = factory(props);
    const {isNullified, classNameEquals, is} = test(element);

    plan(3);
    isNullified(['use']);
    classNameEquals('menu tooltip');
    is('data-tooltip', 'foobar');
});

tape('factory useLoading', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'menu',
    });
    const props = {
        use: [
            useLoading(true),
        ],
    };
    const element = factory(props);
    const {isNullified, classNameEquals} = test(element);

    plan(2);
    isNullified(['use']);
    classNameEquals('menu loading');
});

tape('factory useBadge', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'menu',
    });
    const props = {
        use: [
            useBadge('123'),
        ],
    };
    const element = factory(props);
    const {isNullified, classNameEquals, is} = test(element);

    plan(3);
    isNullified(['use']);
    classNameEquals('menu badge');
    is('data-badge', '123');
});

tape('factory useUtility', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'menu',
    });
    const props = {
        use: [
            useUtility(
                useUtility.Cursor.MOVE,
                useUtility.Text.ERROR,
                useUtility.Position.ABSOLUTE,
            ),
        ],
    };
    const element = factory(props);
    const {isNullified, classNameEquals, is} = test(element);

    plan(2);
    isNullified(['use']);
    classNameEquals('menu c-move text-error p-absolute');
});

tape('factory complete', ({plan, ...t}) => {
    const test = tester(t);
    const factory = builder({
        type: 'div',
        className: 'menu',
        style: ({primary, link, size}) => ({
            [`btn-${size}`]: size,
            'btn-primary': primary,
            link,
        }),
        extend: ({fiz, buz}) => ({foobar: fiz + buz}),
        render: ({foo}) => (foo),
    });

    const onClick = () => {
    };

    const props = {
        size: 'xl',
        primary: true,
        link: true,
        onClick,
        fiz: '1',
        buz: '2',
        foo: 'foo',
        bar: 'bar',
        use: [
            useUtility(
                useUtility.Text.ERROR,
                useUtility.Position.ABSOLUTE,
            ),
            useTooltip('tooltip'),
            useBadge('10'),
            useType('ul'),
            useLoading(true),
        ],
    };
    const element = factory(props);
    const {isNullified, classNameEquals, typeEquals, is} = test(element);

    plan(8);
    is('children', 'foo');
    is('foobar', '12');
    is('onClick', onClick);
    is('data-badge', '10');
    is('data-tooltip', 'tooltip');
    isNullified(['use', 'fiz', 'buz', 'size', 'primary', 'link', 'foo']);
    typeEquals('ul');
    classNameEquals('menu btn-xl btn-primary link text-error p-absolute tooltip badge loading');
});