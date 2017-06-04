import React from 'react';
import { storiesOf } from '@kadira/storybook';
import throttle from '../../utils/throttle';
import debounce from '../../utils/debounce';
import PubSub from '../../utils/pub-sub';

let i = 0;
let j = 0;
let k = 0;
let l = 0;
const throttleFunc = throttle(() => {
    document.getElementById('throttleCounter').innerHTML = `${i}`;
    i += 1;
}, 300);
const noThrottleFunc = () => {
    document.getElementById('originalCounter').innerHTML = `${j}`;
    j += 1;
};
const debounceFunc = debounce(() => {
    document.getElementById('debounceCounter').innerHTML = `${k}`;
    k += 1;
}, 300);
const noDebounceFunc = () => {
    document.getElementById('originalCounter').innerHTML = `${l}`;
    l += 1;
};

storiesOf('Utils', module)
.add('throttle', () => {
    window.removeEventListener('mousemove', debounceFunc);
    window.removeEventListener('mousemove', noDebounceFunc);
    window.addEventListener('mousemove', throttleFunc);
    window.addEventListener('mousemove', noThrottleFunc);
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
    window.removeEventListener('mousemove', throttleFunc);
    window.removeEventListener('mousemove', noThrottleFunc);
    window.addEventListener('mousemove', debounceFunc);
    window.addEventListener('mousemove', noDebounceFunc);
    return (
        <div id="container">
            <h2>Original Mousemove Count</h2>
            <div id="originalCounter">0</div>
            <h2>Debounce Mousemove Count</h2>
            <div id="debounceCounter">0</div>
        </div>
    );
})
.add('pub/sub', () => {
    window.removeEventListener('mousemove', throttleFunc);
    window.removeEventListener('mousemove', noThrottleFunc);
    window.removeEventListener('mousemove', debounceFunc);
    window.removeEventListener('mousemove', noDebounceFunc);
    const BUTTON_CLICK_TOPIC = 'BUTTON_CLICK';
    const OTHER_TOPIC = 'OTHER';
    const pubSub = new PubSub();
    const token1 = pubSub.subscribe(BUTTON_CLICK_TOPIC, () => {
        alert('send data to tracking');
    });
    const token2 = pubSub.subscribe(BUTTON_CLICK_TOPIC, () => {
        alert('send data to server');
    });
    pubSub.subscribe(OTHER_TOPIC, () => {
        alert('meh!!!!!');
    });
    return (
        <div id="container">
            <div>
                <button id="publisher" onClick={() => pubSub.publish(BUTTON_CLICK_TOPIC, { id: '12345' })}>
                    Publish Topic
                </button>
                <button id="clearButtonClick" onClick={() => pubSub.clearSubscriptions(BUTTON_CLICK_TOPIC)}>
                    Unsubscribe Topic
                </button>
            </div>
            <div style={{ marginTop: '100px' }}>
                <button id="unsubscriber1" onClick={() => pubSub.unsubscribe(token1)}>
                    Unsubscribe Tracking Listener
                </button>
                <button id="unsubscriber2" onClick={() => pubSub.unsubscribe(token2)}>
                    Unsubscribe Server Listener
                </button>
                <button id="clearAll" onClick={() => pubSub.clearAllSubscriptions()}>
                    Clear All Subscriptions
                </button>
            </div>
        </div>
    );
});
