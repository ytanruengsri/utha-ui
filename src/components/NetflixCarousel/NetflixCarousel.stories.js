import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import randomColor from 'randomcolor';
import NetflixCarousel from './NetflixCarousel';

const createCardStyle = () => {
    return {
        display: 'flex',
        color: '#FFF',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: randomColor(),
    };
};

const titleStyle = {
    alignSelf: 'center',
    fontWeight: 'bold',
};

storiesOf('Netflix Carousel', module)
.add('default', () => {
    return (
        <NetflixCarousel
            width={960}
            height={480}
            enableArrows
            visibleSlides={5}
            onPrev={action('prev')}
            onNext={action('next')}
        >
            <div style={createCardStyle()}><div style={titleStyle}>1</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>2</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>3</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>4</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>5</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>6</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>7</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>8</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>9</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>10</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>11</div></div>
            <div style={createCardStyle()}><div style={titleStyle}>12</div></div>
        </NetflixCarousel>
    );
});
