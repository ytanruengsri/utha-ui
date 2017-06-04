import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import randomColor from 'randomcolor';
import NetflixCarousel from './NetflixCarousel';

const createCardStyle = () => {
    return {
        display: 'flex',
        height: '128px',
        width: '230px',
        color: '#FFF',
        justifyContent: 'center',
        backgroundColor: randomColor(),
    };
};

const titleStyle = {
    alignSelf: 'center',
    fontWeight: 'bold',
};

storiesOf('Css Carousel', module)
.add('default', () => {
    return (
        <NetflixCarousel
            width={'960px'}
            height={'480px'}
            enableArrows
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
