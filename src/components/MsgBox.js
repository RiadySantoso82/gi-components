import React, {useState, useEffect} from 'react';
import { Button, Alert } from 'react-bootstrap';

const MsgBox = (props) => (
  <Alert show={!!props.msg} variant={props.isErr ? 'danger' : 'success'}>
    <Alert.Heading>{props.isErr ? 'Error' : ''}</Alert.Heading>
    <p>{props.msg}</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={props.onClickClose}>Close</Button>
    </div>
  </Alert>
);

export default MsgBox;
