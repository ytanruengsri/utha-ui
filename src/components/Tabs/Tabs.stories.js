import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from './Tabs';

const Tab = Tabs.Tab;
const tabContent1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const tabContent2 = 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';
const tabContent3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.';

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
                <div>{tabContent1}</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2">
                <div>{tabContent2}</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>{tabContent3}</div>
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
                <div>{tabContent1}</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2" disabled>
                <div>{tabContent2}</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>{tabContent3}</div>
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
                <div>{tabContent1}</div>
            </Tab>
            <Tab id="t2" headline="Tab Headline 2">
                <div>{tabContent2}</div>
            </Tab>
            <Tab id="t3" headline="Tab Headline 3">
                <div>{tabContent3}</div>
            </Tab>
        </Tabs>
    ))
    .add('Justify', () => (
        <div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify Start</h3>
                <hr />
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="start"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>{tabContent1}</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>{tabContent2}</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>{tabContent3}</div>
                    </Tab>
                </Tabs>
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify Center</h3>
                <hr />
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="center"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>{tabContent1}</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>{tabContent2}</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>{tabContent3}</div>
                    </Tab>
                </Tabs>
            </div>
            <div style={{ margin: '30px 0' }}>
                <h3>Justify End</h3>
                <hr />
                <Tabs
                    defaultActiveKey="t2"
                    onTabClick={action('clicked')}
                    onTabSwitched={action('switched')}
                    justify="end"
                >
                    <Tab id="t1" headline="Tab Headline 1">
                        <div>{tabContent1}</div>
                    </Tab>
                    <Tab id="t2" headline="Tab Headline 2">
                        <div>{tabContent2}</div>
                    </Tab>
                    <Tab id="t3" headline="Tab Headline 3">
                        <div>{tabContent3}</div>
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
                    <div>{tabContent1}</div>
                </Tab>
                <Tab id="t2" headline="Tab Headline 2">
                    <div>{tabContent2}</div>
                </Tab>
                <Tab id="t3" headline="Tab Headline 3">
                    <div>{tabContent3}</div>
                </Tab>
                <Tab id="t4" headline="Tab Headline 4">
                    <div>{tabContent1}</div>
                </Tab>
                <Tab id="t5" headline="Tab Headline 5">
                    <div>{tabContent2}</div>
                </Tab>
                <Tab id="t6" headline="Tab Headline 6">
                    <div>{tabContent3}</div>
                </Tab>
            </Tabs>
        </div>
    ));
