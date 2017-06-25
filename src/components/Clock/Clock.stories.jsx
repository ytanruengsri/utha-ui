import React from 'react';
import { storiesOf } from '@storybook/react';
import Clock from './Clock';

storiesOf('Clock', module)
.add('accordion', () => (
    <Clock />
));
