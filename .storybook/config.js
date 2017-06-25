import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon); 

const storyContainerStyle = {
    padding: '10px'
};
addDecorator((story) => (
    <div style={storyContainerStyle}>
        {story()}
    </div>
));

const req = require.context('../src/components', true, /\.stories\.jsx?$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
