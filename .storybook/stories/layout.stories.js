import React from 'react';
import {Container, Columns, Column} from '../../src';

export default {
    title: 'Layout',
};

export const container = () => (
    <Container size={Container.Size.LARGE}>
        <Columns gapless>
            <Column width={Column.Width.SIX}>six</Column>
            <Column width={Column.Width.SIX}>six</Column>
        </Columns>

        <Columns gapless>
            <Column>six</Column>
            <Column auto>six</Column>
        </Columns>
    </Container>
);
