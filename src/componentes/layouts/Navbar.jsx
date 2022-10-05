import React from 'react';

import Form from './Form';
import Menu from './Menu';
import Carrito from '../content/Carrito';


const Navbar = () => {

    const categorias = ["Placa De Madre", "Procesador", "Memorias","Placa De Video","Perifericos"]
    return (

    <>
        <h1 className='titulo'>Tienda De Componentes</h1>

        <Form busqueda="Buscar Producto"/>

        <Menu menu={categorias}/>

        <Carrito/>

    </>

    

    );
}

export default Navbar;
