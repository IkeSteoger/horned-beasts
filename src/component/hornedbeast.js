import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heart from './heartImg.png'
import Image from 'react-bootstrap/Image'

class HornedBeast extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            favs: 0
        }
    }

      
  
    handleClick = () => {
        let newState = this.state.favs 

        this.setState({
            favs: newState + 1
        })
        this.props.onClickState(this.props.title, this.props.imageUrl, this.props.description);
    }

    render() {
        return (
            <>
                <div onClick={this.handleClick} className='m-5 square border border-secondary'>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h2>{this.props.title}</h2>
                                <Image src={this.props.imageUrl} alt={this.props.title} rounded fluid/>
                            </Col>
                            <Col>
                                <Image src={Heart} alt="heart" width={350} rounded fluid/> 
                                <p>Times Favorited: {this.state.favs}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default HornedBeast;