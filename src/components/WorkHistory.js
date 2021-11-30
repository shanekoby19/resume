import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Chrono } from 'react-chrono';

const items = [{
    title: 'August 2018 - January 2021',
    cardTitle: 'Data Clerk - Acelero Learning',
    cardDetailedText: 'As a Data Entry Clerk at Acelero Learning I was in charge of entering attendance, meal data, and child learning logs. During this three period I worked hard towards a Bachelors Degree in Computer Science.',
}, {
    title: 'January 2021',
    cardTitle: 'Graduation',
    cardDetailedText: 'In January of 2021, I graduated with a bachelors degree in Computer Science from Western Governors Universty. At this point, I was eager to put all the programming theory I learned into practice.'
}, {
    title: 'January 2021 - Present',
    cardTitle: 'Data Coordinator - Acelero Learning',
    cardDetailedText: 'As a data coordinator for Acelero Learning I was able to leverage Javascript to automate dashboards using Google App Script and Google Data Studio. Over the last eight months I have also used my free-time to take on the challenge to learn Javascript and become a full-stack web developer. During this time, I have learned enough to create a fully-functional web application called Inkindable.',
}, {
    title: 'November 2021',
    cardTitle: 'Inkindable',
    cardDetailedText: 'Inkindable is a React web-application designed for parents to track their donations (inkind). The main technologies used in this application are React, Redux and Cloud Firestore. This project was designed to be a portfolio project and can be found below.'
}]

const WorkHistory = () => {
    return (
        <div>
            <Row className='resume_container'>
                <Col xs={12} className='text-center mb-2'>
                    <h1 className='pb-2 border-bottom'>Experience and Education</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='mb-5' style={{height: '70vh', width: "100%"}}>
                    <Chrono
                        items={items}
                        mode={window.innerWidth > 500 ? 'VERTICAL_ALTERNATING' : 'VERTICAL'}
                        hideControls={true}
                        theme={{
                            primary: '#ccc',
                            secondary: 'black',
                            cardBgColor: '#FFFFF3',
                            titleColor: 'white',
                        }}
                    ></Chrono>
                </Col>
            </Row>
        </div>
    )
}

export default WorkHistory;