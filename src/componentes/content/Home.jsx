import React, {useState, useEffect} from 'react';
import { consultarP } from '../utils/funcionesUtiles'

const Home = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        consultarP().then(producto => setProductos(producto))
    }, []);


    return (
        <>

        <div className='row justify-content-center'>
            {productos}
        </div>
        
        </>
    );
};





export default Home;
