import React, {useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import Btn from '../components/Btn';

const MsgBox = (props) => (
  <Alert show={!!props.msg} variant={props.isErr ? 'danger' : 'success'}>
    <Alert.Heading>{props.isErr ? 'Error' : ''}</Alert.Heading>
    <p>{props.msg}</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Btn onClick={props.onClickClose}>Close</Btn>
    </div>
  </Alert>
);

export default MsgBox;
