// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';
import TextControlsExample from './components/TextControlsExample';
import App2 from './App2';
import Prod from './prod';
import Prod2 from './prod2';
import Prod3 from './prod3';
import Prod4 from './prod4';
import Prod5 from './prod5';
import Prod6 from './prod6';
import Prod7 from './prod7';
import Prod8 from './prod8';
import Confirm from './confirm';
import Creditos from './creditos';
import Maqueta from './maqueta';
import video from './imag/comercial.mp4';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Tienda de Artículos Deportivos</h1>
        </header>
        <nav>
          {/* Menú */}
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/prod8">Contacto</Link></li>
            <li><Link to="/creditos">Creditos</Link></li>
            <li><Link to="/maqueta">Maqueta</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<App2 />} />
          <Route path="/prod" element={<Prod />} /> 
          <Route path="/prod2" element={<Prod2 />} /> 
          <Route path="/prod3" element={<Prod3 />} />
          <Route path="/prod4" element={<Prod4 />} />
          <Route path="/prod5" element={<Prod5 />} />
          <Route path="/prod6" element={<Prod6 />} />
          <Route path="/prod7" element={<Prod7 />} />
          <Route path="/prod8" element={<Prod8 />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/creditos" element={<Creditos />} />
          <Route path="/maqueta" element={<Maqueta/>} />

        </Routes>
      </div>
    </Router>
  );
}

function Inicio() {
  return (
    <div>
      <div className="text-container">
        <p>¡Bienvenido a nuestro mundo deportivo, donde la pasión y el rendimiento se encuentran! En Tienda de Artículos Deportivos, nos enorgullece ofrecerte una cuidadosa selección de productos deportivos de alta calidad que impulsarán tu juego y elevarán tu experiencia atlética. Desde equipos de última generación hasta moda deportiva que combina estilo y funcionalidad, estamos comprometidos en brindarte todo lo que necesitas para alcanzar tus metas fitness. Explora nuestra colección y descubre el equipo perfecto para potenciar tu rendimiento y llevar tu pasión por el deporte al siguiente nivel.</p>
      </div>
      <div className="carousel-container">
        <Carousel interval={2500}>
          <Carousel.Item>
            <ExampleCarouselImage text="img" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="img2" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="img3" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="img4" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="img5" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="img6" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="button-container">
      <video width="640" height="360" controls>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      </div>
    </div>
  );
}

export default App;
