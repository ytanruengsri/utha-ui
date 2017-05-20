import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Scala.scss';

const Classname = {
    BASE: 'uscala',
    LIST: 'uscala__list',
    LIST_ITEM: 'uscala__litem',
};

const Scala = ({
    sections,
}) => {
    const items = sections.map((section) => {
        const sectionClasses = classnames(
            Classname.LIST,
        );
        return (
            <section>
                <h4>{section.headline}</h4>
                <ul className={sectionClasses}>
                    {section.items.map((item) => {
                        const itemClasses = classnames(
                            Classname.LIST_ITEM,
                            {
                                [`${Classname.LIST_ITEM}--active`]: item.active,
                            },
                        );
                        return (
                            <li className={itemClasses}>
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    });

    return (
        <div className={Classname.BASE}>
            {items}
        </div>
    );
};

Scala.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
};

Scala.defaultProps = {
    sections: [],
};

export default Scala;
