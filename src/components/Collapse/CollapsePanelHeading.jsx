import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconAngleRight from 'react-icons/lib/fa/angle-right';

const Classname = {
    BASE: 'ucollapsepanel__heading',
    ACTIVE: 'ucollapsepanel__heading--active',
    ICON: 'ucollapsepanel__heading__icon',
};

class CollapsePanelHeading extends Component {
    render() {
        const baseClasses = classnames(
            Classname.BASE,
            {
                [Classname.ACTIVE]: this.props.active,
            },
        );
        const iconClasses = classnames(
            Classname.ICON,
            {
                [Classname.ACTIVE]: this.props.active,
            },
        );
        return (
            <div
                className={baseClasses}
            >
                <button
                    id={`panel-heading-${this.props.id}`}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>
                <span
                    className={iconClasses}
                    role="button"
                    tabIndex={0}
                    onClick={this.props.onClick}
                >
                    <IconAngleRight />
                </span>
            </div>
        );
    }
}

CollapsePanelHeading.propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

CollapsePanelHeading.defaultProps = {
    onClick: () => {},
};


export default CollapsePanelHeading;
