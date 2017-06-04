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
};

class NetflixCarousel extends Component {
    constructor(props) {
        super(props);

        this.center = this.center.bind(this);
        this.renderSlides = this.renderSlides.bind(this);
        this.renderArrows = this.renderArrows.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.getSlideStyle = this.getSlideStyle.bind(this);

        this.state = {
            current: this.center(),
            move: 0,
            width: props.width,
            height: props.height,
        };
    }

    getSlideStyle() {
        const {
            visibleSideSlides,
        } = this.props;
        const {
            width,
        } = this.state;

        const baseWidth = width / ((visibleSideSlides * 2) + 1);
        const proportionalHeight = baseWidth / (16 / 9);
        const length = React.Children.count(this.props.children);
        const offset = length % 2 === 0 ? -width / 10 : 0;

        return {
            width: `${baseWidth}px`,
            height: `${proportionalHeight}px`,
            transform: ` translateX(${this.state.move + offset}px)`,
        };
    }

    handleNext() {
        const {
            width,
        } = this.state;
        const {
            visibleSideSlides,
        } = this.props;

        const current = this.state.current;
        const baseWidth = width / ((visibleSideSlides * 2) + 1);
        const distance = this.center() - (current + 1);
        const move = distance * baseWidth;

        if (this.props.onNext) {
            this.props.onNext();
        }

        if (current + 1 < this.props.children.length) {
            this.setState({ current: current + 1, move });
        }
    }

    handlePrev() {
        const {
            width,
        } = this.state;
        const {
            visibleSideSlides,
        } = this.props;

        const current = this.state.current;
        const baseWidth = width / ((visibleSideSlides * 2) + 1);
        const distance = this.center() - (current - 1);
        const move = distance * baseWidth;

        if (this.props.onPrev) {
            this.props.onPrev();
        }

        if (current - 1 >= 0) {
            this.setState({ current: current - 1, move });
        }
    }

    center() {
        const length = React.Children.count(this.props.children);
        return Math.floor(length / 2);
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
                    style={this.getSlideStyle(index, this.state.current)}
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

    render() {
        const {
            enableArrows,
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
                {this.renderSlides()}
            </div>
        );
    }
}

NetflixCarousel.propTypes = {
    children: PropTypes.any.isRequired,
    enableArrows: PropTypes.bool,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    visibleSideSlides: PropTypes.number,
};

NetflixCarousel.defaultProps = {
    enableArrows: false,
    onPrev: () => {},
    onNext: () => {},
    width: 'auto',
    height: 'auto',
    visibleSideSlides: 2,
};

export default NetflixCarousel;
