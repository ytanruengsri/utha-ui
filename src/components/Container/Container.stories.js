import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container from './Container';

storiesOf('Container', module)
    .add('with flex', () => (
        <Container flex>
            <div key="p1" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p2" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p3" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p4" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p5" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p6" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p7" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p8" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p9" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p10" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p11" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p12" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p13" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p14" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p15" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p16" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p17" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p18" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p19" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p20" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
        </Container>
    ))
    .add('without flex', () => (
        <Container>
            <div key="p1" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p2" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p3" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p4" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p5" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p6" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p7" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p8" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p9" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p10" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p11" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p12" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p13" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p14" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p15" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p16" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p17" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p18" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p19" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
            <div key="p20" style={{ backgroundColor: '#E6E6E6', width: '246px', height: '355px' }} />
        </Container>
    ));
