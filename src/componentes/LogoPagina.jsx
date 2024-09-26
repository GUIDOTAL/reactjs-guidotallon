import { Link } from 'react-router-dom';
import './LogoPagina.css';

export default function LogoPagina () {

return (
    <>
        <div>
            <img className='estructuralogo' src="../images/logo.png"> <Link to={'/'} ></Link> </img>
            <h1 className='tituloPagina'> DEPORTSHOP</h1>
        </div>
    </>
)
};
