import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {


      render() {
        return <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header>
          <Modal.Title>{this.props.beastSelected}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={this.props.beastImg} alt="" width="100%"/>
            {this.props.beastDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    }
}

export default SelectedBeast;
