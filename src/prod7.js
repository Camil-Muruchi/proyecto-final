// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
    const products = [
        { id: 1, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615xwIblEAL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/4PxkXKM ' },
        { id: 2, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81BuKVLOnYL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/caiKv2t ' },
        { id: 3, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61YNjrQfjUL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/bVZ2iKc ' },
        { id: 4, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WqjoNP6DL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/9yeIW54 ' },
        { id: 5, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91MNBT7r3JL.__AC_SY300_SX300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/i9v655g ' },
        { id: 6, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Km5JB6YcL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/bfMY2xb ' },
        { id: 7, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71poLRaYr5L.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/bGW4Ce4 ' },
        { id: 8, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/717Sv5+yxhL._AC_SY300_SX300_.jpg ', link: 'https://a.co/d/i4ToOzY ' },
        { id: 9, title: 'Producto', description: 'pelota', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71yqzKxvK2L.__AC_SY300_SX300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/f8VRQ48 ' },
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
