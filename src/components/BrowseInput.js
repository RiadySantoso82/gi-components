import React from 'react';
import { Form, InputGroup, FormControl, Spinner, Button } from 'react-bootstrap'

const BrowseInput = (props) => (
  <Form.Group>
    <Form.Label>{props.caption}</Form.Label>
    {props.loading
    ? <InputGroup className="mb-3">
        <Spinner animation="border" />
      </InputGroup>
    :<InputGroup className="mb-3">
        <FormControl placeholder={props.placeholder || props.caption} value={props.value || ''} disabled />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={props.onClick}>Browse</Button>
        </InputGroup.Append>
      </InputGroup>
    }
  </Form.Group>
)

export default BrowseInput;
