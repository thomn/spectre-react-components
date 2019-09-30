import React from 'react';
import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import 'spectre.css';
import 'spectre.css/dist/spectre-exp.min.css';
import 'spectre.css/dist/spectre-icons.min.css';

const context = require.context('./stories', true, /\.stories\.js$/);

const style = {
    textAlign: 'center',
    margin: '50px 25px',
    background: '#FCFCFC',
    padding: '25px 10px',
    border: '1px solid #F0F0F0',
    borderRadius: '2px'
};

addDecorator(story => <div style={style}>{story()}</div>);
addDecorator(withKnobs);
configure(context, module);