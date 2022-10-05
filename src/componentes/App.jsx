import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar';
import '../styles/App.css';
import Home from './content/Home';
import Producto from './content/Producto';
import About from './content/About';
import DetalleProducto from './content/DetalleProducto';
import Contacto from './content/Contacto';
import Footer from './content/Footer';


const App = () => {
  
  return (

  <>
    <BrowserRouter>
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Producto/:id" element={<Producto/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/DetalleProducto" element={<DetalleProducto/>} />
      
      </Routes>
      

      <Footer/>
    </BrowserRouter>


  </>

    

  );
}

export default App;
