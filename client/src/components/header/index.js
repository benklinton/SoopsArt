import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <header className="masthead">
            <Container className=" h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="font-weight-heavy"> Welcome to Soops Art</h1>
                        <p className="lead">Art created by Sophie Gifford</p>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;