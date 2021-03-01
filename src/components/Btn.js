import React, {Fragment} from 'react';
import { Button,Spinner } from 'react-bootstrap';

const Btn = (props) => (
  <Button variant={props.variant} size={props.size} onClick={props.onClick} disabled={props.disabled || props.processing}>
    {props.processing && (
      <Fragment>
      <Spinner
        as="span"
        animation="border"
        size="sm"
      />&nbsp;
      </Fragment>
    )}
    {props.children}
  </Button>
);

export default Btn;
