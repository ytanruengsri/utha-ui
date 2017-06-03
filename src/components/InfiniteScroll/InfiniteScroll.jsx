import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from '../../utils/throttle';

const Classnames = {
    BASE: 'uinfinite',
};

class InfiniteScroll extends Component {
    constructor(props) {
        super(props);

        // debounced functions are stateful,
        // we have to create one debounced function per component instance.
        this.checkDistanceFromBottom = throttle(
            this.checkDistanceFromBottom.bind(this),
            props.delay,
        );
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkDistanceFromBottom);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkDistanceFromBottom);
    }

    checkDistanceFromBottom() {
        const body = document.body;
        const documentHeightRanges = [
            body.clientHeight,
            body.scrollHeight,
            body.offsetHeight,
        ];
        const windowHeightRanges = [
            window.innerHeight,
        ];
        const documentHeight = Math.max(...documentHeightRanges);
        const windowHeight = Math.max(...windowHeightRanges);
        const scrollTop = body.scrollTop;

        const pixelsFromWindowBottomToBottom = documentHeight - scrollTop - windowHeight;
        if (pixelsFromWindowBottomToBottom < this.props.threshold) {
            this.props.onAction();
        }
    }

    render() {
        const {
            children,
        } = this.props;
        return (
            <div className={Classnames.BASE}>
                {children}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    children: PropTypes.any.isRequired,
    delay: PropTypes.number,
    threshold: PropTypes.number,
    onAction: PropTypes.func,
};

InfiniteScroll.defaultProps = {
    delay: 300,
    threshold: 200,
    onAction: () => {},
};

export default InfiniteScroll;
