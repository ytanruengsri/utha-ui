import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from './Tabs';

const Tab = Tabs.Tab;

storiesOf('Tabs', module)
    .add('Specification', () => (
        <ul>
            <li>
                Render tab content on demand
            </li>
            <li>
                Support async content
            </li>
            <li>
                Render tab content once (No re-rendering needed)
            </li>
            <li>
                Scrollable tab headline
            </li>
            <li>
                Add/Remove tabs
            </li>
        </ul>
    ))
    .add('Basic', () => (
        <Tabs
            defaultActiveKey="t1"
            onTabClick={action('clicked')}
            onTabSwitched={action('switched')}
        >
            <Tab id="t1" headline="Tab Headline 1">
                <div>Tab content 1</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2">
                <div>Tab content 2</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>Tab content 3</div>
            </Tab>
        </Tabs>
    ))
    .add('Disabled', () => (
        <Tabs
            defaultActiveKey="t1"
            onTabClick={action('clicked')}
            onTabSwitched={action('switched')}
        >
            <Tab id="t1" headline="Tab Headline 1">
                <div>Tab content 1</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2" disabled>
                <div>Tab content 2</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>Tab content 3</div>
            </Tab>
        </Tabs>
    ))
    .add('Icon', () => (
        <Tabs
            defaultActiveKey="t2"
            onTabClick={action('clicked')}
            onTabSwitched={action('switched')}
        >
            <Tab id="t1" headline="Tab Headline 1">
                <div>Tab content 1</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2">
                <div>Tab content 2</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>Tab content 3</div>
            </Tab>
        </Tabs>
    ))
    .add('Justify', () => (
        <div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify Start</h3>
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="start"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>Tab content 1</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>Tab content 2</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>Tab content 3</div>
                    </Tab>
                </Tabs>
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify Center</h3>
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="center"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>Tab content 1</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>Tab content 2</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>Tab content 3</div>
                    </Tab>
                </Tabs>
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify End</h3>
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="end"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>Tab content 1</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>Tab content 2</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>Tab content 3</div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    ))
    .add('Scroll', () => (
        <div style={{ width: 100 }}>
            <Tabs
                defaultActiveKey="t2"
                onTabClick={action('clicked')}
                onTabSwitched={action('switched')}
            >
                <Tab id="t1" headline="Tab Headline 1">
                    <div>Tab content 1</div>
                </Tab>
                <Tab id="t2" headline="Tab Headline 2">
                    <div>Tab content 2</div>
                </Tab>
                <Tab id="t3" headline="Tab Headline 3">
                    <div>Tab content 3</div>
                </Tab>
                <Tab id="t4" headline="Tab Headline 4">
                    <div>Tab content 4</div>
                </Tab>
                <Tab id="t5" headline="Tab Headline 5">
                    <div>Tab content 5</div>
                </Tab>
                <Tab id="t6" headline="Tab Headline 6">
                    <div>Tab content 6</div>
                </Tab>
            </Tabs>
        </div>
    ));
