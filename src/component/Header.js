import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Header extends React.Component {
    render() {
        return ([
        <Container>
            <Row>
                <h1 className="text-center">Horned Beasts</h1>,
                <h2 className="text-center">Click your favorites!</h2>
            </Row>
        </Container>
        ])
    }
}

export default Header;