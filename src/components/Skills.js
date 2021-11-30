import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Skills = () => {
    const parallaxRef = useRef();
    const [reactIconDimensions, setReactIconDimensions] = useState(0);
    const [firestoreIconDimensions, setFirestoreIconDimensions] = useState(0);
    const [reduxIconDimensions, setReduxIconDimensions] = useState(0);

    useEffect(() => {
        document.querySelector('.parallax-container').addEventListener('scroll', handleScroll);
    });

    const handleScroll = (e) => {
        const scrollPosition = e.target.scrollLeft || e.target.scrollTop;
        const base = e.target.scrollLeft ? document.querySelector('.first-container').offsetWidth : document.querySelector('.first-container').offsetHeight;
        const containerStart = base * 0.664;
        const containerHalfWay = base;
        const containerEnd = base / 0.7496;
        const secondContainerStart = base / 0.607;
        const secondContainerHalfWay = base / 0.4984;
        const secondContainerEnd = base / 0.4284;
        const thirdContainerStart = base / 0.375;
        const thirdContainerHalfWay = base / 0.3328;
        const thirdContainerEnd = base / 0.2997;

        if(scrollPosition > thirdContainerHalfWay && scrollPosition < thirdContainerEnd) {
            setReduxIconDimensions(thirdContainerEnd - scrollPosition);
        }
        else if(scrollPosition > thirdContainerStart && scrollPosition < thirdContainerHalfWay) {
            setReduxIconDimensions(scrollPosition - thirdContainerStart);
        }
        else if(scrollPosition > secondContainerHalfWay && scrollPosition < secondContainerEnd) {
            setFirestoreIconDimensions(secondContainerEnd - scrollPosition);
        }
        else if(scrollPosition > secondContainerStart && scrollPosition < secondContainerHalfWay) {
            setFirestoreIconDimensions(scrollPosition - secondContainerStart)
        }
        else if(scrollPosition > containerHalfWay && scrollPosition < containerEnd) {
            setReactIconDimensions(containerEnd - scrollPosition);
        }
        else if(scrollPosition > containerStart && scrollPosition < containerHalfWay) {
            setReactIconDimensions(scrollPosition - containerStart);
        }
    }

    return (
        <div className='mb-5'>
            <Row className='resume_container'>
                <Col xs={12} className='text-center mb-2'>
                    <h1 className='border-bottom mb-2 pb-2'>Technologies in Inkindable</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{position: 'relative', height: "500px"}}>
                    <Parallax className='parallax-container' horizontal={window.innerWidth > 1000} ref={parallaxRef} pages={5} style={{ top: '0', left: '0' }}>
                        <ParallaxLayer
                            className='first-container'
                            offset={0}
                            speed={2}
                            style={{backgroundColor: '#ff6d6d'}}
                        ></ParallaxLayer>

                        <ParallaxLayer
                            offset={0}
                            speed={0.5}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style={{color: 'white'}}>{window.innerWidth > 1000 ? `Scroll Right` : `Scroll Down`}</h1>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            speed={2}
                            style={{backgroundColor: '#000814'}}
                        ></ParallaxLayer>

                        <ParallaxLayer
                            offset={1}
                            speed={0.5}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src='/img/react-icon.png' width={reactIconDimensions} height={reactIconDimensions}></Image>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={2}
                            speed={2}
                            style={{backgroundColor: '#f27059'}}
                        ></ParallaxLayer>
                    
                        <ParallaxLayer
                            offset={2}
                            speed={0.5}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image src='/img/cloud-firestore-icon.png' width={firestoreIconDimensions} height={firestoreIconDimensions}></Image>
                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={3}
                            speed={2}
                            style={{backgroundColor: '#a5a5a5'}}
                        ></ParallaxLayer>

                        <ParallaxLayer
                            offset={3}
                            speed={0.5}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image src='/img/redux-icon.png' width={reduxIconDimensions} height={reduxIconDimensions}></Image>
                        </ParallaxLayer>
                        
                        <ParallaxLayer
                            offset={4}
                            speed={2}
                            style={{backgroundColor: '#ff6d6d'}}
                        ></ParallaxLayer>

                        <ParallaxLayer
                            offset={4}
                            speed={0.5}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 style={{color: 'white'}}>{window.innerWidth > 1000 ? `Scroll Left` : `Scroll Up`}</h1>
                        </ParallaxLayer>

                    </Parallax>
                </Col>
            </Row>
        </div>
    )
}

export default Skills;