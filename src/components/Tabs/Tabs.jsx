import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Tab from './Tab';
import './Tabs.scss';

const Classname = {
    BASE: 'utabs',
    BAR: 'utabs__bar',
    PANEL: 'utabs__panel',
};

const TabPosition = [
    'top',
    'bottom',
    'left',
    'right',
];

const Justify = [
    'start',
    'center',
    'end',
];

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);

        this.state = {
            activeKey: props.activeKey || props.defaultActiveKey,
        };
    }

    activate(key) {
        this.setState({ activeKey: key });

        if (this.props.onTabClick) {
            this.props.onTabClick(key);
        }
    }

    render() {
        const {
            children,
            justify,
        } = this.props;
        const {
            activeKey,
        } = this.state;
        const classes = classnames(
            Classname.BASE,
        );
        const tabsBarClasses = classnames(
            Classname.BAR,
            {
                [`${Classname.BAR}--justify-${justify}`]: justify,
            },
        );
        const tabsPanelClasses = classnames(
            Classname.PANEL,
        );

        let activeTab = null;
        const tabs = React.Children.map(children, (tab) => {
            if (!tab) return null;

            const tabProps = tab.props || tab._store.props || {};
            const isTabActive = tabProps.id === activeKey;
            if (isTabActive) {
                activeTab = tabProps.children;
            }
            // or create <li> element here
            return React.cloneElement(tab, {
                id: tabProps.id,
                active: isTabActive,
                headline: tabProps.headline,
                disabled: tabProps.disabled,
                onClick: (e) => {
                    this.activate(tabProps.id);
                },
            });
        }, this);

        return (
            <div
                role="tablist"
                className={classes}
            >
                <ul className={tabsBarClasses}>
                    {tabs}
                </ul>
                <div role="tabpanel" className={tabsPanelClasses}>
                    {activeTab}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    children: PropTypes.any.isRequired,
    defaultActiveKey: PropTypes.string.isRequired,
    activeKey: PropTypes.string,
    justify: PropTypes.oneOf(Justify),
    tabHeadlineStyle: PropTypes.object,
    tabPosition: PropTypes.oneOf(TabPosition),
    onTabClick: PropTypes.func,
    onTabSwitched: PropTypes.func,
};

Tabs.defaultProps = {
    justify: 'start',
    tabPosition: 'top',
    tabHeadlineStyle: {},
    onTabClick: () => {},
    onTabSwitched: () => {},
};

// Expose Tab as a sub-component
Tabs.Tab = Tab;

export default Tabs;
