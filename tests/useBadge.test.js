import tape from 'tape';
import prepare from './prepare';
import {useBadge} from '../src/hooks';

tape('test useBadge', ({plan, equal}) => {
    const builder = prepare();
    const factory = builder({
        type: 'div',
    });

    const props = {
        children: 'child',
        use: [
            useBadge('123'),
        ],
    };

    const element = factory(props);

    plan(3);
    equal(element.props.className, 'badge');
    equal(element.props.children, 'child');
    equal(element.props['data-badge'], '123');
});