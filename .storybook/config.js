import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => (
    <div style={{ padding: '10px' }}>
        {story()}
    </div>
));

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
