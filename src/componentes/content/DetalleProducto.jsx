import React from'react';
import Contador from '../layouts/contador';



const DetalleProducto = ({producto}) => {

    return (
        <>
            <div className='contenedor-Productos'>
            
            <div className='contenedor-img'>
                <img className='img-producto' src={`../img/${producto.img}`}/>
            </div>
            <div className='contenedor-infoProductos'>
                <div>
                    <div>
                        <h3 className='TituloProudcto'>{producto.nombre}</h3>
                    </div>
                    <div>
                        <h2 className='precio'>{producto.precio}</h2>
                    </div>
                    <div>
                        <Contador/>
                    </div>
                </div>
                <div>
                <button className='boton-comprar'>Agregar Carrito</button>
                </div>
                
                <div className='descripcion-producto'>
                    <div>
                        <div className='contenedor-info'>
                            <h3>lo que tenes que saber de este producto</h3>
                            <h4>{producto.info1}</h4>
                            <h4>{producto.info2}</h4>
                            <h4>{producto.info3}</h4>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </>
    );
}

export default DetalleProducto;
