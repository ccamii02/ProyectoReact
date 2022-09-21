import React from 'react';

const Carrito = () => {
    return (
    
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header" id="contenedor-h5">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Mi Carrito</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>

                <div className="boton-vaciarC">
                    <button id="vaciar-carrito" className="agregar">Vaciar Carrito</button>
                    <button id="realizar-compra" className="agregar">Realizar Compra</button>
                </div>

                <div className="contenedor-del-carrito">
                    <p id="precioTotal">Precio Total: $</p>
                    <p>Productos:</p>
                </div>
                
                <div id="contenedor-carrito" className="offcanvas-body">
                </div>
            </div>
        </>
    );
}

export default Carrito;
