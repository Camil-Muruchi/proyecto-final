import React from 'react';
import Button from 'react-bootstrap/Button';
import BasicExample from './components/BasicExample';

function ToolbarBasicExample() {
  const products = [
    { id: 1, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 2, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 3, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 4, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 5, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 6, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 7, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 8, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
    { id: 9, title: 'Nombre e imagen del producto', description: 'Descripción del producto', buttonText: 'Botón', image: 'URL de la imagen', link: 'URL del producto' },
  ];

  return (
    <div>
      <h1>TITULO</h1>
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
    </div>
  );
}

export default ToolbarBasicExample;
