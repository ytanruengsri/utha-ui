import React, { Component } from 'react';

const Classname = {
    BASE: 'uclock',
};

class Clock extends Component {
    constructor(props) {
        super(props);

        // Binding
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);

        this.state = {
            started: false,
            h: 0,
            m: 0,
            s: 0,
        };
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    start() {
        this.interval = setInterval(() => {
            let h = this.state.h;
            let m = this.state.m;
            let s = this.state.s;

            if (s === 59) {
                s = 0;
                m += 1;
            } else {
                s += 1;
            }

            if (m === 60) {
                m = 0;
                h += 1;
            }

            if (h === 24) {
                h = 0;
                m = 0;
                s = 0;
            }

            this.setState({
                s,
                m,
                h,
            });
        }, 1000);
    }

    pause() {
        clearInterval(this.interval);
    }

    render() {
        const {
            h,
            m,
            s,
        } = this.state;
        return (
            <div
                className={Classname.BASE}
            >
                <div id="clock">
                    {h}:{m}:{s}
                </div>
                <div id="controller">
                    <button onClick={this.start}>start</button>
                    <button onClick={this.pause}>pause</button>
                </div>
            </div>
        );
    }
}

export default Clock;
