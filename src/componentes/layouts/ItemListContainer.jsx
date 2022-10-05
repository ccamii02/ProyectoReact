import React from 'react';
import Contador from './contador';
import DescripcionProductos from './DescripcionProductos';

const ItemListContainer = () => {
    return (
        <>
        <div className='contenedor-Productos'>
            
                <div className='contenedor-img'>
                    <img className='img-producto' src="../img/ryzen5-5600.png"/>
                </div>
                <div className='contenedor-infoProductos'>
                    <div>
                        <div>
                            <h3 className='TituloProudcto'>Procesador gamer AMD Ryzen 5 5600X 100-100000065BOX de 6 núcleos y 4.6GHz de frecuencia</h3>
                        </div>
                        <div>
                            <h2 className='precio'>50.000$</h2>
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
                                <ul>
                                    <li>- Es ideal para jugadores y creadores de contenido que requieran un instrumento de gran ejecución. </li>
                                    <li>- Memoria caché de 32 MB, rápida y volátil</li>
                                    <li>- Soporta memoria RAM DDR4.</li>
                                    <li>- Su potencia es de 65 W.</li>
                                    <li>- Cuenta con 12 hilos que favorecen la ejecución de múltiples programas a la vez.</li>
                                    <li>- Producto en empaque original.</li>
                                    <li>- Procesador innovador desarrollado bajo altos estándares de calidad.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <DescripcionProductos/>
        </>
    );
}

export default ItemListContainer;
