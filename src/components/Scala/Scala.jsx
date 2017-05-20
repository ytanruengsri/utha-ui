import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Scala.scss';

const Classname = {
    BASE: 'uscala',
    LIST: 'uscala__list',
    LIST_HEADLINE: 'uscala__headline',
    LIST_ITEM: 'uscala__litem',
};
const HeadlineAlignment = [
    'left',
    'right',
    'center',
];

const Scala = ({
    sections,
    headlineAlignment,
}) => {
    const items = sections.map((section) => {
        const sectionClasses = classnames(
            Classname.LIST,
        );
        const sectionHeadlineClasses = classnames(
            Classname.LIST_HEADLINE,
            `${Classname.LIST_HEADLINE}--align-${headlineAlignment}`,
        );
        return (
            <section>
                <h4 className={sectionHeadlineClasses}>{section.headline}</h4>
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
    headlineAlignment: PropTypes.oneOf(HeadlineAlignment),
};

Scala.defaultProps = {
    sections: [],
    headlineAlignment: 'left',
};

export default Scala;
