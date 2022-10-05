import React from 'react';
import {Link} from 'react-router-dom';


const Menu = ({menu}) => {

    return (
        <>


            <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link className='nav-link active' to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
            
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">{menu[0]}</a>
                <a className="dropdown-item" href="#">{menu[1]}</a>
                <a className="dropdown-item" href="#">{menu[2]}</a>
                <a className="dropdown-item" href="#">{menu[3]}</a>
                <a className="dropdown-item" href="#">{menu[4]}</a>
            </div>
            </li>
            <Link className='nav-link active' to="/contacto">Contacto</Link>
            <button id="contador-carrito" className="boton-carro" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img id="img-carrito" src="../img/carrito.png" style={{height: '40px', width: '40px'}}/><span id="contadorCarrito"/></button>
            </div>
            </div>
        </div>
    </nav> 
        </>
    );
}

export default Menu;
