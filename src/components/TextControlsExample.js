import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TextControlsExample() {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleClick = () => {
    if (!email || !comment) {
      window.alert('Por favor, llena todos los campos');
    }
  }

  return (
    <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Ingresa tu Gmail</Form.Label>
        <Form.Control
          style={{ width: '100%' }}
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deja tu comentario</Form.Label>
        <Form.Control
          style={{ width: '100%', resize: 'none' }}
          as="textarea"
          rows={3}
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </Form.Group>
      <Link to={email && comment ? "/confirm" : "#"} onClick={handleClick}><Button>Enviar</Button></Link>
    </Form>
  );
}

export default TextControlsExample;
