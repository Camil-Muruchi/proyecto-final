// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
  const products = [
    { id: 1, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71oKtGXUF9L._AC_SX575_.jpg', link: 'https://a.co/d/eW68onO' },
    { id: 2, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71JW2rMyNEL._AC_SY575_.jpg', link: 'https://a.co/d/7RRDETn' },
    { id: 3, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717IZ92ogwL._AC_SX575_.jpg', link: 'https://a.co/d/aTFmJZw' },
    { id: 4, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61O30g0cZmL._AC_SY575_.jpg', link: 'https://a.co/d/eAhF77R' },
    { id: 5, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71uGMI0dPXL._AC_SY575_.jpg', link: 'https://a.co/d/84LVBON' },
    { id: 6, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61XUgYQNntL._AC_SX569_.jpg', link: 'https://a.co/d/gHmTiId' },
    { id: 7, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NB9Z-bTUL._AC_SX575_.jpg', link: 'https://a.co/d/7HGX36K' },
    { id: 8, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71cuUDCTjEL._AC_SX575_.jpg', link: 'https://a.co/d/cQN3rmJ' },
    { id: 9, title: 'Producto', description: 'tenis', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81llwgpoTkL._AC_SX575_.jpg', link: 'https://a.co/d/27nisci' },
  ];

  return (
    <div>
      <h1>Esta es la página de productos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ textAlign: 'center' }}>
            <BasicExample 
              title={product.title} 
              description={product.description} 
              buttonText={product.buttonText} 
              image={product.image} 
              link={product.link} 
            />
          </div>
        ))}
      </div>
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
    </div>
  );
}
export default ToolbarBasicExample;
