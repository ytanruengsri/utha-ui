import React from 'react';
import { storiesOf } from '@kadira/storybook';
import throttle from '../../utils/throttle';
import debounce from '../../utils/debounce';

storiesOf('Utils', module)
.add('throttle', () => {
    let i = 0;
    let j = 0;
    window.addEventListener('mousemove', throttle(() => {
        document.getElementById('throttleCounter').innerHTML = `${i}`;
        i += 1;
    }, 300));
    window.addEventListener('mousemove', () => {
        document.getElementById('originalCounter').innerHTML = `${j}`;
        j += 1;
    });
    return (
        <div id="container">
            <h2>Original Mousemove Count</h2>
            <div id="originalCounter">0</div>
            <h2>Throttle Mousemove Count</h2>
            <div id="throttleCounter">0</div>
        </div>
    );
})
.add('debounce', () => {
    let i = 0;
    let j = 0;
    window.addEventListener('mousemove', debounce(() => {
        document.getElementById('debounceCounter').innerHTML = `${i}`;
        i += 1;
    }, 300));
    window.addEventListener('mousemove', () => {
        document.getElementById('originalCounter').innerHTML = `${j}`;
        j += 1;
    });
    return (
        <div id="container">
            <h2>Original Mousemove Count</h2>
            <div id="originalCounter">0</div>
            <h2>Debounce Mousemove Count</h2>
            <div id="debounceCounter">0</div>
        </div>
    );
});
