import React from 'react';
import { Form, InputGroup, Spinner } from 'react-bootstrap'
import ReactNumeric from 'react-numeric';

const NumericInput = (props) => {
  let decimalPlace = 2;
  if (props.decimalPlaces) decimalPlace = parseInt(props.decimalPlaces,10);

  return (
  <Form.Group>
    <Form.Label>{props.caption}</Form.Label>
    {props.loading
    ? <InputGroup className="mb-3">
        <Spinner animation="border" />
      </InputGroup>
    : <ReactNumeric className="form-control" type="tel" minimumValue="0" decimalPlaces={decimalPlace} suffixText={props.suffixText || ''} value={props.value || 0} onChange={props.onChange}/>
    }
  </Form.Group>
)}

export default NumericInput;
