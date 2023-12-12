// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import TextControlsExample from './components/TextControlsExample';
import Image from 'react-bootstrap/Image';
import cred from './imag/cred.gif';

function ToolbarBasicExample() {
  return (
    <div>
      <h1>ESTE PROYECTO FUE REALIZADO POR:</h1>
      <h5>Edson Camil Muruchi</h5>
      <h3>MATERIA</h3>
      <h5>INF-122-WEB2 PAR "D"</h5>
      <h3>LICENCIADA DE MATERIA </h3>
      <h5>Marisol Tellez</h5>
      <Image src={cred}  /> 
    </div>
  );
}

export default ToolbarBasicExample;