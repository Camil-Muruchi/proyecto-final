// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
    const products = [
        { id: 1, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71G4kkPdU-L._AC_SY550_.jpg ', link: 'https://a.co/d/1mmiC3e ' },
        { id: 2, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31Nv6ponHnL._AC_SX569_.jpg ', link: 'https://a.co/d/6gcnnIP ' },
        { id: 3, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51JyXMG4PyL._AC_SX569_.jpg ', link: 'https://a.co/d/aFKtjwI ' },
        { id: 4, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71LPdu26vxL._AC_SX569_.jpg ', link: 'https://a.co/d/hEDtbeu ' },
        { id: 5, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/710o0VupScL._AC_SX569_.jpg ', link: 'https://a.co/d/6KU0vri ' },
        { id: 6, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81gHzitlpsL._AC_SX425_.jpg ', link: 'https://a.co/d/cWlE1cs ' },
        { id: 7, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81LBZg9YzGL._AC_SX569_.jpg ', link: 'https://a.co/d/3mhzQJw ' },
        { id: 8, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/415xRYxXTpL._AC_SX569_.jpg ', link: 'https://a.co/d/hyE5SKq ' },
        { id: 9, title: 'Producto', description: 'poleras', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81+O6GnEKyL._AC_SX466_.jpg ', link: 'https://a.co/d/aueb2Ja ' },
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
