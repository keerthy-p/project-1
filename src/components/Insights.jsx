import React, { useState } from 'react';
import Countup from 'react-countup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollTrigger from 'react-scroll-trigger';
function Insights() {
    const [countOn, setCountOn] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                <Row>
                    <Col md={4} lg={4}>
                        <div className='count-style'>
                            <h1>
                                {countOn && <Countup start={0} end={20} duration={3} delay={0} />}+
                            </h1>
                            <p>Awards Gained</p>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className='count-style'>
                            <h1>
                                {countOn && <Countup start={0} end={30} duration={3} delay={0} />}+
                            </h1>
                            <p>Years of Experience </p>
                        </div>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className='count-style'>
                            <h1>
                                {countOn && <Countup start={0} end={598} duration={3} delay={0} />}+
                            </h1>
                            <p>Rented Home Stay</p>
                        </div>
                    </Col>
                </Row>
                
            </ScrollTrigger>

        </>
    );
} export default Insights;