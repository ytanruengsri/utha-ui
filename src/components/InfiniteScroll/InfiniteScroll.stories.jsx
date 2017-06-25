import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InfiniteScroll from './InfiniteScroll';

const style = {
    border: '4px solid white',
    height: '120px',
    width: '100%',
    marginBottom: '50px',
    background: '#333',
    padding: '20px',
    color: 'white',
};

storiesOf('InfiniteScroll', module)
.add('with default delay', () => (
    <InfiniteScroll
        onAction={action('do stuff')}
    >
        <div style={style}>Block 1</div>
        <div style={style}>Block 2</div>
        <div style={style}>Block 3</div>
        <div style={style}>Block 4</div>
    </InfiniteScroll>
));
