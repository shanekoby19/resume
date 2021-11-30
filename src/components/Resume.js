import React from 'react';
import { Container } from 'react-bootstrap';

import WorkHistory from "./WorkHistory";
import Contact from './Contact';
import Skills from './Skills';
import Inkindable from './Inkindable';

const Resume = () => {
    return (
        <Container style={{backgroundColor: 'white'}} className='border border-rounded px-5 pt-3 pb-5'>
            <Contact></Contact>
            <WorkHistory></WorkHistory>
            <Skills></Skills>
            <Inkindable></Inkindable>
        </Container>
    )
}

export default Resume;