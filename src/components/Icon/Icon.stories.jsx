import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

storiesOf('Icon', module)
    .add('different sizes', () => (
        <div>
            <Icon name="like" size="sm" />
            <Icon name="like" size="lg" />
            <Icon name="like" size="x2" />
            <Icon name="like" size="x3" />
            <Icon name="like" size="x4" />
            <Icon name="like" size="x5" />
        </div>
    ));
