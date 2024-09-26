import './ItemListContainer.css';
import {getProducts} from '../asyncMock'
import './ItemCard.jsx';

export default function ItemListContainer () {

    const [products, setProducts] = useState([]);
    
        useEffect(() => {
        getProducts.then(data=> setProducts(data));
}, []);


    
return (
    <>
    <p className='estructuraHola' >BIENVENIDOS A LA TIENDA N1 DE DEPORTES DEL PAIS </p> 
        <section className='estructuraSaludo'>
            

            {products.map(product => <ItemCard key= {product.id} product={product} />)}

        </section>

    </>
);
};