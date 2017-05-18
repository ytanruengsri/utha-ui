import React from 'react';
import PropTypes from 'prop-types';
import './Scala.scss';

const Classname = {
    BASE: 'uscala',
};

const Scala = ({
    activeKeys,
    onClick,
}) => (
    <div
        role="button"
        className={Classname.BASE}
        onClick={onClick}
        tabIndex="0"
    >
        Empty
    </div>
);

Scala.propTypes = {
    activeKeys: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
};

Scala.defaultProps = {
    activeKeys: [],
    onClick: () => {},
};

export default Scala;
