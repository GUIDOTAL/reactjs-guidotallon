import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock';
import './ItemDetailContainer.css';


export default function ItemDetailContainer () {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    
        useEffect(() => {
        setProduct(getProduct(id));
}, []);


return (
    <>
        <article className='articleItemDetailContainer'>
        
        <h2>DETALLES DE PRODUCTO</h2>
        <h4>
            {product.title} 
        </h4>
        <img src={product.image} alt={product.title} />
        <p>Descripcion: {product.description}</p>
        <p>$ {product.price}</p>

        </article>
    </>
);
};