import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uuidV4 from 'uuid/v4';
import './Container.scss';

const Classname = {
    BASE: 'ucontainer',
    ITEM: 'ucontainer__item',
};

const Container = ({ children, flex }) => {
    const containerClasses = classnames(
        Classname.BASE,
        {
            [`${Classname.BASE}--flex`]: flex,
        },
    );
    const itemClasses = classnames(
        Classname.ITEM,
        {
            [`${Classname.ITEM}--flex`]: flex,
        },
    );

    const containerItems = [];
    const items = React.Children.toArray(children);
    items.forEach((item) => {
        const containerItem = (
            <li
                key={uuidV4()}
                className={itemClasses}
            >
                {item}
            </li>
        );
        containerItems.push(containerItem);
    });
    return (
        <ul
            className={containerClasses}
        >
            {containerItems}
        </ul>
    );
};

Container.propTypes = {
    children: PropTypes.string.isRequired,
    flex: PropTypes.bool,
};

Container.defaultProps = {
    flex: false,
};

export default Container;
