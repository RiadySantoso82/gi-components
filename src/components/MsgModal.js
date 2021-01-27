import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';

const MsgModal = (props) => (
  <Modal size='xl' show={!!props.msg} onHide={props.onClickClose} >
    <Modal.Header closeButton>
      <Modal.Title>{props.isErr ? 'Error' : ''}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClickClose}>
            Close
          </Button>
        </Modal.Footer>
  </Modal>
);

export default MsgModal;
