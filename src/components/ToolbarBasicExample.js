// ToolbarBasicExample.js
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ToolbarBasicExample() {
  const redirectToApp2 = () => {
    // Puedes agregar cualquier lógica adicional aquí antes de redirigir
    return <Navigate to="/productos" replace />;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Añade este div para centrar */}
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Link to="/productos"><Button>1</Button></Link>
          <Link to="/prod"><Button>2</Button></Link> 
          <Link to="/prod2"><Button>3</Button></Link>
          <Link to="/prod3"><Button>4</Button></Link>
          <Link to="/prod4"><Button>5</Button></Link>
          <Link to="/prod5"><Button>6</Button></Link>
          <Link to="/prod6"><Button>7</Button></Link>
          <Link to="/prod7"><Button>8</Button></Link>
        </ButtonGroup>
      </ButtonToolbar>
    </div> {/* Cierra el div aquí */}
  );
}

export default ToolbarBasicExample;
