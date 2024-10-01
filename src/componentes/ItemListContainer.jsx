import './ItemListContainer.css';
import {getProducts} from '../asyncMock'
import './ItemCard.jsx';
import { useParams } from 'react-router-dom';

export default function ItemListContainer () {

    const [products, setProducts] = useState([]);
    const {categoryId}= useParams()


        useEffect(() => {

        if(categoryId) {
        const filterProducts = getProductsByCategory(categoryId);
        setProducts(filterProducts);
        } else {
        getProducts.then(data=> setProducts(data));
        }
}, [categoryId]);


    
return (
    <>
    <p className='estructuraHola' >BIENVENIDOS A LA TIENDA N1 DE DEPORTES DEL PAIS </p> 
        <section className='estructuraSaludo'>
            

            {products.map(product => <ItemCard key= {product.id} product={product} />)}

        </section>

    </>
);
};