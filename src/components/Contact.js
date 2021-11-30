import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Contact = () => {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    return (
        <div>
            <Row className='resume_container'>
                <Col xs={12} className='text-center mb-2'>
                    <h1 className='border-bottom mb-2 pb-2'>Contact Me</h1>
                </Col>
            </Row>
            <Row className={ showPhoneNumber ? 'text-center mb-5 justify-content-center' : 'text-center mb-5 justify-content-center'}>
                <Col lg={1} xs={3}>
                    <a href='https://www.linkedin.com/in/shane-kobylecky/' target='_blank'><Image src='/img/linkedInIcon.png' width={60} height={50} className='me-3'></Image></a>
                </Col>
                <Col lg={1} xs={3}>
                    <a href='https://github.com/shanekoby19' target="_blank"><Image src='/img/githubIcon.png' width={50} height={50} className='me-4'></Image></a>
                </Col>
                <Col lg={1} xs={3}>
                    <a href='mailto:skobylecky1@gmail.com?cc=skobylecky1@gmail.com'><Image src='/img/gmailIcon.png' width={50} height={45} className='me-4'></Image></a>
                </Col>
                <Col lg={1} xs={3}>
                    <Image onClick={() => setShowPhoneNumber(!showPhoneNumber)} src='/img/phoneIcon.png' width={50} height={50}></Image>
                </Col>
            </Row>
            {
                showPhoneNumber &&
                <Row>
                    <Col xs={12} className={showPhoneNumber ? 'text-center mb-5' : 'text-center'}>
                        <h4>702-340-9784</h4>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default Contact;