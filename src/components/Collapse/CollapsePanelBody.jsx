import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Classname = {
    BASE: 'ucollapsepanel__body',
    ACTIVE: 'ucollapsepanel__body--active',
};

class CollapsePanelBody extends Component {
    render() {
        const baseClasses = classnames(
            Classname.BASE,
            {
                [Classname.ACTIVE]: this.props.active,
            },
        );
        return (
            <div
                id={`panel-body-${this.props.id}`}
                className={baseClasses}
                aria-labelledby={this.props.id}
                aria-hidden={this.props.active}
                role="tabpanel"
            >
                {this.props.children}
            </div>
        );
    }
}

CollapsePanelBody.propTypes = {
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

CollapsePanelBody.defaultProps = {
    onClick: () => {},
};

export default CollapsePanelBody;
