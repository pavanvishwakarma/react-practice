import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class BootstrapModal extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    handleModal = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            <div>
                <h2>Bootstrap Modal</h2>

                <Button variant="success" className="d-inline mb-2" onClick={() => this.handleModal()}>PopUp Launch</Button>

                <Modal show={this.state.show} onHide={this.handleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModal()}>Close</Button>
                        <Button variant="primary" onClick={() => this.handleModal()}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default BootstrapModal;