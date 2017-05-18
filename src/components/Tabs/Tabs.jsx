import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Tab from './Tab';
import './Tabs.scss';

const Classname = {
    BASE: 'utabs',
    HEADLINE: 'utabs__headline',
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
            activeKey: props.activeKey,
        };
    }

    componentWillReceiveProps(nextProps) {
        // FIXME: Check if tab key is changed
        this.setState({ activeKey: nextProps.activeKey });
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
            defaultActiveKey,
            onTabClick,
        } = this.props;
        const {
            activeKey,
        } = this.state;
        const classes = classnames(
            Classname.BASE,
            {
                [`${Classname.BASE}--justify-${justify}`]: justify,
            },
        );
        const tabHeadlineClasses = classnames(
            Classname.HEADLINE,
        );

        let activeTab = null;
        const tabs = React.Children.map(children, (tab) => {
            if (!tab) return null;

            const tabProps = tab.props || tab._store.props || {};
            const isTabActive = tabProps.id === activeKey || tabProps.id === defaultActiveKey;
            if (isTabActive) {
                activeTab = tabProps.children;
            }
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
                <ul className={tabHeadlineClasses}>
                    {tabs}
                </ul>
                <div role="tabpanel" style={{ border: '1px solid black' }}>
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
    activeKey: '',
    justify: 'start',
    tabPosition: 'top',
    tabHeadlineStyle: {},
    onTabClick: () => {},
    onTabSwitched: () => {},
};

// Expose Tab as a sub-component
Tabs.Tab = Tab;

export default Tabs;
