import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Clock from './Clock';

storiesOf('Clock', module)
.add('accordion', () => (
    <Clock />
));
