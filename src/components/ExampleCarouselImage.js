import React from 'react';
import img from '../imag/img.png';
import img2 from '../imag/img2.jpg';
import img3 from '../imag/img3.jpg';
function ExampleCarouselImage({ text }) {
  const imageUrls = {
    img: 'https://contents.mediadecathlon.com/m13188881/k$741d3e138c3d978c6a16d57ba4ff95ba/sq/gyronetics-kurzhantelset.jpg?format=auto&f=646x646',
    img2: 'https://i.ebayimg.com/images/g/niAAAOSwSh9jR1pz/s-l1600.jpg',
    img3: 'https://img.ltwebstatic.com/images3_pi/2023/02/17/1676614203c4e70601749505b98d86203b89ca4b51_thumbnail_600x.webp',
    img4: img ,
    img5: img2 ,
    img6: img3 ,
  };

  // Comprueba si el texto proporcionado corresponde a una de las claves en imageUrls
  if (!imageUrls.hasOwnProperty(text.toLowerCase())) {
    console.error(`La clave "${text}" no se encontró en imageUrls.`);
    return null;
  }

  // Comprueba si la imagen existe en la ruta proporcionada
  fetch(imageUrls[text.toLowerCase()])
    .then(response => {
      if (!response.ok) {
        throw new Error('La imagen no se encontró en la ruta proporcionada.');
      }
    })
    .catch(error => console.error(error));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <img
        className="d-block"
        src={imageUrls[text.toLowerCase()]}
        alt={text}
        style={{ maxHeight: '600px', maxWidth: '600px' }}
      />
    </div>
  );
}

export default ExampleCarouselImage;
