import React from 'react';

const Form = ({busqueda}) => {
    return (
        <>
        <section>
        <form className="d-flex">
        <input id='buscador' className="form-control me-1" type="search" placeholder={busqueda} aria-label="Search" />
        <button id='boton-buscar' className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        </section> 
        </>
    );
}

export default Form;

