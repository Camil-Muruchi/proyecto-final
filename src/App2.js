// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
  const products = [
    { id: 1, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/714gpNuwfeL._AC_SX679_.jpg ', link: 'https://a.co/d/f3PCrRK ' },
    { id: 2, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-Jh-DqBsL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/5BHfrwa ' },
    { id: 3, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: ' https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/815cytD++ML._AC_SX679_.jpg', link: 'https://a.co/d/iRVLQoS ' },
    { id: 4, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/814vFr7nZpL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/4OvIq94 ' },
    { id: 5, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81UEHrVVdfL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/74RBFas ' },
    { id: 6, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71-Jh-DqBsL._AC_SX679_.jpg ', link: 'https://a.co/d/fFdKGq5 ' },
    { id: 7, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81UsYMlvv1L._AC_SX679_.jpg ', link: 'https://a.co/d/8EGASxV ' },
    { id: 8, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/716IIkb8msL.__AC_SY300_SX300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/byTqTkX ' },
    { id: 9, title: 'Producto', description: 'guantes', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81vQiJ+ztgL._AC_SX569_.jpg ', link: 'https://a.co/d/1qrhxUx ' },
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
