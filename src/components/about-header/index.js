import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function AboutHeader() {
    return (
        <>
            <header className='about-header'>
                <Container className='h-100'>
                    <Row className='h-100 align-items-center'>
                        <div className='col-lg-12'>
                            <h1 className='mb-4 header-font' style={{ textAlign: 'center' }}>About the Artist</h1>
                        </div>
                    </Row>
                </Container>
            </header>
            <div className="contain">
                <Row>
                    <Col lg={6} className="mt-4 mb-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at odio sed felis consequat finibus. Cras ornare ligula ornare dignissim molestie. In ornare, libero ut laoreet placerat, mauris felis ornare nibh, quis euismod felis metus eget metus. Morbi eget nisi vel nisl cursus laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed commodo quis justo ac vulputate. Quisque vulputate pharetra laoreet. Fusce ut facilisis nulla, sed placerat purus. Ut consequat ipsum dolor, sit amet venenatis metus dictum eu. Duis non ipsum sed ipsum ornare lacinia ut ut tellus. Donec quis dui dolor. Quisque eget mauris nibh. Ut rutrum luctus augue id feugiat. Etiam facilisis, sem ut lacinia tincidunt, risus quam mattis orci, eu hendrerit ligula arcu non justo. Aliquam vel blandit justo.
                        </p>
                    </Col>
                    <Col lg={6} className="mt-4 mb-4">
                        <Image src="https://via.placeholder.com/400" className="about-img" alt='filler' fluid/>

                    </Col>
                </Row>
            </div>

        </>
    )
}

export default AboutHeader;