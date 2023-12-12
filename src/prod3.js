// ToolbarBasicExample.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
    const products = [
        { id: 1, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71+KDPrgeDL._AC_SY300_SX300_.jpg ', link: 'https://a.co/d/8iMgxq3 ' },
        { id: 2, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61xV8v9VDpL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/jjussEL ' },
        { id: 3, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71B7iUpWzxL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/bzwU7Mk ' },
        { id: 4, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61kYPUynlLL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/7VnJpoR ' },
        { id: 5, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71HEqww6NtL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/cq45XMY ' },
        { id: 6, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61hXGa-DwGL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/eYJJ3IF ' },
        { id: 7, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81Y26toqdTL.__AC_SY300_SX300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/3DVh97z ' },
        { id: 8, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61jau6tusOL.__AC_SX300_SY300_QL70_FMwebp_.jpg ', link: 'https://a.co/d/87IuJrN ' },
        { id: 9, title: 'Producto', description: 'mancuernas', buttonText: 'Ver producto', image: ' ', link: 'https://a.co/d/dyS7CXN ' },
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
