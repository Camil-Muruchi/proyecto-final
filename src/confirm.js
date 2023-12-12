import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Image from 'react-bootstrap/Image';
import gif from './imag/conf.gif';

function ToolbarBasicExample() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>tu comentario fue enviado</h1>
      <h5>se te redirigirá al inicio en breve</h5>
      <Image src={gif} />
    </div>
  );
}

export default ToolbarBasicExample;
