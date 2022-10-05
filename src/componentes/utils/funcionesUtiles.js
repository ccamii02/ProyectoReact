import {Link} from 'react-router-dom';


export const consultarP = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    const cardProducto = productos.map( producto => 
        <div className="card" key={producto.id} style={{width:'18rem'}}>
            <img src={"./img/" + producto.img} className="card-imh-top"/>
            <div className="card-body">
                <h5 className="card-body">{producto.nombre}</h5>
                <p className="card-body">${producto.precio}</p>
                <p className="card-body"> cantidad: {producto.stock}</p>
                <Link  to={"/Producto/" + producto.id}>
                    <button className="btn btn-dark">Ver Producto</button>
                </Link>

            </div>
        </div>
        )
        return cardProducto
}