import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Classname = {
    BASE: 'ucollapsepanel__heading',
    ACTIVE: 'ucollapsepanel__heading--active',
};

class CollapsePanelHeading extends Component {
    render() {
        const baseClasses = classnames(
            Classname.BASE,
            {
                [Classname.ACTIVE]: this.props.active,
            },
        );
        return (
            <button
                id={`panel-heading-${this.props.id}`}
                className={baseClasses}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
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
