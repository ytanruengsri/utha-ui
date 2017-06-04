import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NativeCarousel.scss';

const Classname = {
    BASE: 'ucarousel',
    TYPE: 'ucarousel--native',
    INNER: 'ucarousel--native__inner',
    SLIDE: 'ucarousel--native__slide',
};

const NativeCarousel = ({ children }) => {
    const classes = classnames(Classname.BASE, Classname.TYPE);
    const innerClasses = classnames(Classname.INNER);
    const slides = React.Children.map(children, (slide) => {
        if (!slide) return null;

        return (
            <div className={Classname.SLIDE}>
                {slide}
            </div>
        );
    }, this);
    return (
        <div className={classes}>
            <div className={innerClasses}>
                {slides}
            </div>
        </div>
    );
};

NativeCarousel.propTypes = {
    children: PropTypes.any.isRequired,
};

export default NativeCarousel;
