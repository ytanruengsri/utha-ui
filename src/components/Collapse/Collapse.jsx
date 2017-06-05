import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Collapse.scss';

const Classname = {
    BASE: 'ucollapse',
    ACCORDION: 'ucollapse-accordion',
    PANELS: 'ucollapse__panels',
};

class Collapse extends Component {
    constructor(props) {
        super(props);

        this.renderChildren = this.renderChildren.bind(this);
        this.handlePanelChange = this.handlePanelChange.bind(this);

        this.state = {
            activeKeys: props.activeKeys || [props.defaultActiveKey],
        };
    }

    handlePanelChange(activeKey) {
        const {
            accordion,
            onChange,
        } = this.props;
        const {
            activeKeys,
        } = this.state;

        let activePanels = [...activeKeys];
        if (accordion) {
            activePanels = [activeKey];
        } else {
            activePanels.push(activeKey);
        }

        this.setState({
            activeKeys: activePanels,
        }, () => {
            if (onChange) {
                if (accordion) {
                    onChange(activePanels[0]);
                } else {
                    onChange(activePanels);
                }
            }
        });
    }

    renderChildren() {
        const children = React.Children.map(this.props.children, (child, index) => {
            if (!child || !isValidElement(child)) return null;

            if (child.type.name !== 'CollapsePanel') {
                throw new Error('children should be of type CollapsePanel');
            }

            const childProps = child.props || child._store.props || {};
            const childId = childProps.id || String(index);
            return React.cloneElement(child, {
                key: `panel-${index}`,
                id: childId,
                active: this.state.activeKeys.indexOf(childId) !== -1,
                onClick: (id) => {
                    this.handlePanelChange(id);
                },
            });
        });
        return (
            <div
                className={Classname.PANELS}
                role="tablist"
            >
                {children}
            </div>
        );
    }

    render() {
        const baseClasses = classnames(Classname.BASE, {
            [Classname.ACCORDION]: this.props.accordion,
        });
        return (
            <div
                className={baseClasses}
            >
                {this.renderChildren()}
            </div>
        );
    }
}

Collapse.propTypes = {
    children: PropTypes.any.isRequired,
    accordion: PropTypes.bool,
    defaultActiveKey: PropTypes.string,
    activeKeys: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
};

Collapse.defaultProps = {
    accordion: true,
    onChange: () => {},
};

export default Collapse;
