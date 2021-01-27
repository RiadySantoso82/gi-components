import React from 'react';
import { Button,Spinner } from 'react-bootstrap';

const Btn = (props) => (
  <Button variant={props.variant} size={props.size} onClick={props.onClick} disabled={props.disabled || props.processing}>
    {props.processing && (
      <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
      />&nbsp;
      </>
    )}
    {props.children}
  </Button>
);

export default Btn;

Btn.defaultProps = {
  size: 'sm'
}
