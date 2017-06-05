import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Mock from 'MOCK/collapse.json';
import Collapse from './Collapse';
import CollapsePanel from './CollapsePanel';

const CollapsePanelHeading = CollapsePanel.CollapsePanelHeading;
const CollapsePanelBody = CollapsePanel.CollapsePanelBody;

const {
    first,
    second,
    third,
} = Mock.accordion;
storiesOf('Collapse', module)
.add('accordion', () => (
    <Collapse
        defaultActiveKey="lorem-ipsum"
        accordion
        onChange={action('on change')}
    >
        <CollapsePanel id="lorem-ipsum">
            <CollapsePanelHeading>
                <h3>{first.heading}</h3>
            </CollapsePanelHeading>
            <CollapsePanelBody>
                <p>{first.body}</p>
            </CollapsePanelBody>
        </CollapsePanel>
        <CollapsePanel id="li-europan-lingues">
            <CollapsePanelHeading>
                <h3>{second.heading}</h3>
            </CollapsePanelHeading>
            <CollapsePanelBody>
                <p>{second.body}</p>
            </CollapsePanelBody>
        </CollapsePanel>
        <CollapsePanel id="cicero">
            <CollapsePanelHeading>
                <h3>{third.heading}</h3>
            </CollapsePanelHeading>
            <CollapsePanelBody>
                <p>{third.body}</p>
            </CollapsePanelBody>
        </CollapsePanel>
    </Collapse>
));
