import React from 'react';
import { Form, InputGroup, FormControl, Spinner } from 'react-bootstrap'

const InputText = (props) => (
  <Form.Group>
    <Form.Label>{props.caption}</Form.Label>
    {props.loading
    ? <InputGroup className="mb-3">
        <Spinner animation="border" />
      </InputGroup>
    :<InputGroup className="mb-3">
        <FormControl
          placeholder={props.caption || props.placeholder}
          type={props.type}
          value={props.value || ''}
          disabled={props.disabled}
          onKeyPress={props.onKeyPress}
          onChange={props.onChange}
        />
      </InputGroup>
    }
  </Form.Group>
)

export default InputText;
