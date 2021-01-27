import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalBox = (props) => (
  <Modal size='xl' show={props.show} onHide={props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {props.body}
    </Modal.Body>
  </Modal>
)

export default ModalBox;
