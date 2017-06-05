import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CollapsePanelHeading from './CollapsePanelHeading';
import CollapsePanelBody from './CollapsePanelBody';
import './CollapsePanel.scss';

const Classname = {
    BASE: 'ucollapsepanel',
    ACTIVE: 'ucollapsepanel--active',
};

class CollapsePanel extends Component {
    constructor(props) {
        super(props);

        // Binding
        this.renderPanelContent = this.renderPanelContent.bind(this);
    }

    renderPanelContent() {
        const {
            id,
            active,
        } = this.props;
        return React.Children.map(this.props.children, (child) => {
            if (!child || !isValidElement(child)) return null;

            if (child.type.name === 'CollapsePanelHeading') {
                return React.cloneElement(child, {
                    id,
                    active,
                    onClick: () => {
                        this.props.onClick(id);
                    },
                });
            } else if (child.type.name === 'CollapsePanelBody' && active) {
                return React.cloneElement(child, {
                    id,
                    active,
                });
            }

            // Do not render inactive panel
            return null;
        });
    }

    render() {
        const baseClasses = classnames(
            Classname.BASE,
            {
                [Classname.ACTIVE]: this.props.active,
            },
        );

        return (
            <div
                className={baseClasses}
                id={`panel-${this.props.id}`}
                aria-selected={this.props.active}
                aria-controls={this.props.id}
                aria-expanded={this.props.active}
                role="tab"
            >
                {this.renderPanelContent()}
            </div>
        );
    }
}

CollapsePanel.propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

CollapsePanel.defaultProps = {
    onClick: () => {},
};

// Sub classes
CollapsePanel.CollapsePanelHeading = CollapsePanelHeading;
CollapsePanel.CollapsePanelBody = CollapsePanelBody;

export default CollapsePanel;
