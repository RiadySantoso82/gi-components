import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DialogAsk = (props) => (
  <Modal size='xl' show={!!props.msg} onHide={props.onClickClose} >
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onClickYes}>
            YES
          </Button>
          <Button variant="secondary" onClick={props.onClickClose}>
            NO
          </Button>
        </Modal.Footer>
  </Modal>
);

export default DialogAsk;
