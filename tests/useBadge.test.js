const tape = require('tape');
const {default: useBadge} = require('../src/hooks/useBadge');

tape('test useBadge', ({plan, equal}) => {
    const props = {
        foo: true,
    };

    const expect = 'foo badge';
    const actual = useBadge('12');

    plan(1);
    equal(expect, actual);
});