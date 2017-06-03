import React from 'react';
import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

addDecorator((story) => (
    <div style={{ padding: '10px' }}>
        {story()}
    </div>
));

const req = require.context('../src/components', true, /\.stories\.jsx?$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
