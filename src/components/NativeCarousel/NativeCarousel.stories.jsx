import React from 'react';
import { storiesOf } from '@kadira/storybook';
import randomColor from 'randomcolor';
import NativeCarousel from './NativeCarousel';

const createCardStyle = () => {
    const width = 250;
    const height = (width / (16 / 9));
    return {
        display: 'flex',
        marginRight: '10px',
        width: `${width}px`,
        height: `${height}px`,
        background: '#989898',
        color: '#FFF',
        justifyContent: 'center',
        backgroundColor: randomColor(),
    };
};

const titleStyle = {
    alignSelf: 'center',
    fontWeight: 'bold',
};

storiesOf('Native Carousel', module)
.add('default', () => {
    return (
        <NativeCarousel>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>1</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>2</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>3</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>4</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>5</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>6</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>7</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>8</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>9</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>10</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>11</div></div>
            <div className="ucarousel__card" style={createCardStyle()}><div style={titleStyle}>12</div></div>
        </NativeCarousel>
    );
});
