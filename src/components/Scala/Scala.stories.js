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
    .add('Default', () => (
        <Scala
            sections={sections}
        />
    ))
    .add('Headline Alignment', () => (
        <div>
            <div style={{ margin: '30px 0' }}>
                <h3>Align Left</h3>
                <hr />
                <Scala
                    sections={sections}
                    headlineAlignment="left"
                />
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Align Center</h3>
                <hr />
                <Scala
                    sections={sections}
                    headlineAlignment="center"
                />
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Align Right</h3>
                <hr />
                <Scala
                    sections={sections}
                    headlineAlignment="right"
                />
            </div>
        </div>
    ));
