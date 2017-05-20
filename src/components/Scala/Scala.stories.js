import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Scala from './Scala';

const sections = [
    {
        headline: 'Model',
        items: [
            {
                name: 'iPhone 7',
                active: false,
            },
            {
                name: 'iPhone 7 Plus',
                active: true,
            },
        ],
    },
    {
        headline: 'Color',
        items: [
            {
                name: 'Jet Black',
                active: false,
            },
            {
                name: 'Black',
                active: false,
            },
            {
                name: 'Silver',
                active: false,
            },
            {
                name: 'Gold',
                active: false,
            },
            {
                name: 'Rose Gold',
                active: false,
            },
        ],
    },
    {
        headline: 'Capacity',
        items: [
            {
                name: '32GB',
                active: false,
            },
            {
                name: '128GB',
                active: false,
            },
            {
                name: '256GB',
                active: true,
            },
        ],
    },
];

storiesOf('Scala', module)
    .add('default', () => (
        <div>
            <Scala
                sections={sections}
            />
        </div>
    ));
