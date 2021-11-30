import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Inkindable = () => {

    return (
        <div>
            <Row className='resume_container'>
                <Col xs={12} className='text-center mb-2'>
                    <h1 className='border-bottom mb-2 pb-2'>Inkindable - A Portfolio Project</h1>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <h2 className='mb-4'>What is Inkindable?</h2>
                    <ul>
                        <li>
                            <h4>Inkindable is a <span>web-application</span> developed for parents to enter, track, and visualize their donations.</h4>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <h2 className='mb-4'>Why is Inkindable important?</h2>
                    <ul>
                        <li>
                            <h4>New technologies are bringing about a shift from the physical world to the digital world. The ability to use these technologies to benefit consumers is becoming a neccessity in many companies.</h4>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <h2 className='mb-4'>Speaking of technology...</h2>
                    <ul>
                        <li>
                            <h4>The core of this application is built <a href='https://reactjs.org' target='_blank'>React</a>, <a href='https://redux.js.org/' target='_blank'>Redux</a> and <a href='https://firebase.google.com/docs/firestore' target='_blank'>Google Cloud Firestore</a>.</h4>
                        </li>
                        <li>
                            <h4><a href='https://reactjs.org' target='_blank'>React</a> has quickly become a front-runner for designing web and mobile applications. It's unique component structure makes it painless to create interactive user-interfaces.</h4>
                        </li>
                        <li>
                            <h4><a href='https://redux.js.org/' target='_blank'>Redux</a>, is a state management tool, it helps the application track user data as they move from page to page.</h4>
                        </li>
                        <li>
                            <h4>Finally, <a href='https://firebase.google.com/docs/firestore' target='_blank'>Google Cloud Firestore</a> is a cloud database that works great with Javascript objects.</h4>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row className='mb-4'>
                <Col>
                    <h2 className='mb-4'>Enough already!</h2>
                    <a href='' target='_blank'><button>Demo the application</button></a>
                </Col>
            </Row>
        </div>
    )
}

export default Inkindable;