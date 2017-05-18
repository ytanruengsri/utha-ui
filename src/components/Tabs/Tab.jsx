import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Tab.scss';

const Classname = {
    BASE: 'utab',
    BUTTON: 'utab__button',
};

const Tab = ({
    id,
    headline,
    active,
    disabled,
    onClick,
}) => {
    const classes = classnames(
        Classname.BASE, {
            [`${Classname.BASE}--active`]: active,
            [`${Classname.BASE}--disabled`]: disabled,
        },
    );
    return (
        <li
            className={classes}
            role="tab"
            tabIndex="0"
            aria-selected={active}
            aria-controls={id}
        >
            <button
                disabled={disabled}
                className={Classname.BUTTON}
                onClick={onClick}
            >
                {headline}
            </button>
        </li>
    );
};

Tab.propTypes = {
    id: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    headline: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    onClick: PropTypes.func,
};

Tab.defaultProps = {
    active: false,
    disabled: false,
    onClick: () => {},
};

export default Tab;
