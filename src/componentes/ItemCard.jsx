import { Link } from 'react-router-dom';
import './ItemCard.css';

export default function ItemCard ({product}) {

    return (
        <>
        <article className='articleItemCard'>
        <h4 className='titleCard'>
            {product.title} 
        </h4>
        
        <img className='imageCard' src={product.image} alt={product.title} />
        <p>$ {product.price}</p>
        
        <button><Link to={`/category/${product.id}`}> Mas Detalles </Link></button>

        </article>
        </>
);
}