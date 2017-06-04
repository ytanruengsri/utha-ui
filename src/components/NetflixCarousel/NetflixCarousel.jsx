import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NetflixCarousel.scss';

const Classname = {
    BASE: 'ucarousel',
    TYPE: 'ucarousel--netflix',
    SLIDES: 'ucarousel--netflix__slides',
    SLIDE: 'ucarousel--netflix__slide',
    ACTIONS: 'ucarousel--netflix__actions',
    BUTTON: 'ucarousel--netflix__button',
    INDICATOR: 'ucarousel--netflix__indicator',
};

class NetflixCarousel extends Component {
    constructor(props) {
        super(props);

        this.center = this.center.bind(this);
        this.renderSlides = this.renderSlides.bind(this);
        this.renderIndicators = this.renderIndicators.bind(this);
        this.renderArrows = this.renderArrows.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);

        this.state = {
            current: props.centerMode ? this.center() : 0,
            width: props.width,
            height: props.height,
        };
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUnmount() {

    }

    center() {
        const length = React.Children.count(this.props.children);
        return Math.floor(length / 2);
    }

    handlePrev() {
        if (this.props.onPrev) {
            this.props.onPrev();
        }
    }

    handleNext() {
        const {
            width,
        } = this.state;

        let current = this.state.current;
        if (this.props.onNext) {
            this.props.onNext();
        }

        this.setState({ current: current + 1});
    }

    renderSlides() {
        const slidesContainerClasses = classnames(Classname.SLIDES);
        const slideClasses = classnames(Classname.SLIDE);
        const slides = React.Children.map(this.props.children, (child, index) => {
            const slide = React.cloneElement(child);
            return (
                <figure
                    key={index}
                    className={slideClasses}
                >
                    {slide}
                </figure>
            );
        });
        return (
            <div
                className={slidesContainerClasses}
            >
                {slides}
            </div>
        );
    }

    renderArrows() {
        const actionClasses = classnames(Classname.ACTIONS);
        const leftButtonClasses = classnames(Classname.BUTTON, 'prev');
        const rightButtonClasses = classnames(Classname.BUTTON, 'next');
        return (
            <div className={actionClasses}>
                <button
                    className={leftButtonClasses}
                    onClick={this.handlePrev}
                >
                    {'Previous'}
                </button>
                <button
                    className={rightButtonClasses}
                    onClick={this.handleNext}
                >
                    {'Next'}
                </button>
            </div>
        );
    }

    renderIndicators() {
        const classes = classnames(Classname.INDICATOR);
        return (
            <span className={classes} role="button">Indicator</span>
        );
    }

    render() {
        const {
            enableArrows,
            enableIndicator,
        } = this.props;
        const {
            width,
            height,
        } = this.state;

        const containerClasses = classnames(Classname.BASE, Classname.TYPE);
        return (
            <div
                className={containerClasses}
                style={{ width: `${width}px`, height: `${height}px` }}
            >
                {enableArrows && this.renderArrows()}
                {enableIndicator && this.renderIndicators()}
                {this.renderSlides()}
            </div>
        );
    }
}

NetflixCarousel.propTypes = {
    children: PropTypes.any.isRequired,
    centerMode: PropTypes.bool,
    enableArrows: PropTypes.bool,
    enableIndicator: PropTypes.bool,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onHover: PropTypes.func,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    visibleSlides: PropTypes.number,
};

NetflixCarousel.defaultProps = {
    centerMode: true,
    enableArrows: false,
    enableIndicator: false,
    onPrev: () => {},
    onNext: () => {},
    onHover: () => {},
    width: 'auto',
    height: 'auto',
    visibleSlides: 5,
};

export default NetflixCarousel;
