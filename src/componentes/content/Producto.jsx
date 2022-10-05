import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';
import {Link} from 'react-router-dom';



const Producto = () => {

    const [producto, setProducto] =  useState([])
    const {id} = useParams()

    useEffect(() =>{
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)

        })
    }, [])

    return (
        <> 

        <Link to="/Home">
            <button style={{marginTop:"15px",marginLeft:"25px"}}><img  src="../img/icono-atras.png" alt=""style={{height: '40px', width: '40px'}} /></button>
        </Link>
            
        <div>
            <DetalleProducto producto={producto}/>
        </div>

        </>
    );
}

export default Producto;
