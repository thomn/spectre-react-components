import React from 'react';
import {Button, hooks, Label} from '../../src';
import {boolean, select, text} from '../addons';
const {useBadge} = hooks;

export default {
    title: 'Elements',
};

export const button = () => (
    <Button
        size={select('size', Button.Size)}
        primary={boolean('primary', true)}
        active={boolean('active', false)}
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        success={boolean('success', false)}
        children={text('text', 'Button')}
        {...useBadge(text('badge', ''))}
    />
);

export const label = () => (
    <Label
        primary={boolean('primary', false)}
        secondary={boolean('secondary', false)}
        success={boolean('success', false)}
        warning={boolean('warning', false)}
        error={boolean('error', false)}
        rounded={boolean('rounded', false)}
        children={text('text', 'Label')}
    />
);