import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Icon.scss';

const Classname = {
    BASE: 'uicon',
};

const SIZES = ['sm', 'lg', 'x2', 'x3', 'x4', 'x5'];
const Icon = ({ name, size }) => {
    const classes = classnames(
        Classname.BASE,
        size,
        `${Classname.BASE}--${name}`,
    );
    return (
        <i className={classes} />
    );
};

Icon.propTypes = {
    name: PropTypes.isRequired,
    size: PropTypes.oneOf(SIZES),
};

Icon.defaultProps = {
    size: 'lg',
};

export default Icon;
