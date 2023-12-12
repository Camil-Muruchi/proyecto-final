// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
    const products = [
        { id: 1, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81O9Iy4DOFL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/it7ANn0 ' },
        { id: 2, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gE-y+XKAL._AC_SX466_.jpg ', link: 'https://a.co/d/0cPZCl3 ' },
        { id: 3, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61NVo38EFML.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/h9k0KkQ ' },
        { id: 4, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/612O9+bSXSL._AC_SY300_SX300_.jpg ', link: 'https://a.co/d/1iDwL2F ' },
        { id: 5, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71U40deLmvL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/aeGYScS ' },
        { id: 6, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61gUY6zJNqL._AC_SX679_.jpg ', link: 'https://a.co/d/3YLKkV8 ' },
        { id: 7, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51SOJUj8feL.__AC_SY300_SX300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/6Tg3vuB ' },
        { id: 8, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61bWeA2lFTL._AC_SX679_.jpg ', link: 'https://a.co/d/3hx6XYT ' },
        { id: 9, title: 'Producto', description: 'casco', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hWylTM-bL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/eHlr04M ' },
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
